import { Request, Response } from "express";
import * as mongodb from "mongodb";
import * as responses from "../../helpers/response.handler";
import ErrorCodes from "../../config/error.codes";
import SuccessCodes from "../../config/success.codes";
import { MongoHelper } from "../../config/mongodb.config";
import User_Class from "./user.class";

//db collection get function
const getCollection = () => {
  return MongoHelper.client.db("test").collection("users");
};

export default class MainController {

  //add user controller function
  public addUser = async (req: Request, res: Response): Promise<any> => {
    const requestData = req.body;
    const collection: any = getCollection();

    const userData = new User_Class(requestData);
    collection
      .insertOne(userData)
      .then(() => {
        res
          .status(200)
          .send(responses.success(SuccessCodes.SUCCESSFULLY_DATA_ADDED));
        res.end();
      })
      .catch((err: any) => {
        res.send(responses.failed(ErrorCodes.INTERNAL_ERROR, 400));
      });
  };

  //update user controller function
  public updateUser = async (req: Request, res: Response): Promise<any> => {
    const { _id, first_name, last_name, email, number, gender, photo } =
      req.body;
    const collection: any = getCollection();

    collection
      .findOneAndUpdate(
        {
          _id: new mongodb.ObjectId(_id),
        },
        {
          $set: {
            first_name: first_name,
            last_name: last_name,
            email: email,
            number: number,
            gender: gender,
            photo: photo,
          },
        }
      )
      .then(() => {
        res.send(responses.success(SuccessCodes.SUCCESSFULLY_DATA_UPDATED));
      })
      .catch((err: any) => {
        res.send(responses.failed(ErrorCodes.UPDATE_FAILED));
      });
  };

  //delete user controller function
  public deleteUser = async (req: Request, res: Response): Promise<any> => {
    const id = req.params.id;
    const collection: any = getCollection();

    collection
      .deleteOne({ _id: new mongodb.ObjectId(id) })
      .then(() => {
        res.send(responses.success(SuccessCodes.SUCCESSFULLY_DATA_DELETED));
      })
      .catch((err: any) => {
        res.send(responses.failed(ErrorCodes.INTERNAL_ERROR));
      });
  };

  //get user by id controller function
  public getUserById = async (req: Request, res: Response): Promise<any> => {
    const collection: any = getCollection();
    const id = req.params.id;

    collection
      .findOne({ _id: new mongodb.ObjectId(id) })
      .then((data: any) => {
        res.send(
          responses.successWithPayload(
            SuccessCodes.SUCCESSFULLY_DATA_RETRIVED,
            data
          )
        );
      })
      .catch((err: any) => {
        res.send(responses.failed(ErrorCodes.INTERNAL_ERROR, 400));
      });
  };

  //get user list controller
  public getUserList = async (req: Request, res: Response): Promise<any> => {
    const collection: any = getCollection();

    try {
      let match: any = {};
      let keyword: string = String(req.query.keyword);
      let gen: string = String(req.query.gender);

      if (req.query.keyword) {
        match.$or = [
          { first_name: new RegExp(keyword as string, "i") },
          { last_name: new RegExp(keyword as string, "i") },
          { email: new RegExp(keyword as string, "i") },
        ];
      }

      if (req.query.gender) {
        match.gender = new RegExp(gen as string, "i");
      }

      //aggregate pipline variables
      const aggregatePipline = [{ $match: match }];

      collection
        .aggregate(aggregatePipline)
        .toArray((err: any, items: any[]) => {
          if (err) {
            res.status(500).send(responses.failed(ErrorCodes.INTERNAL_ERROR));
            res.end();
          } else {
            res
              .status(200)
              .send(
                responses.successWithPayload(
                  SuccessCodes.SUCCESSFULLY_DATA_RETRIVED,
                  items
                )
              );
          }
        });
    } catch (err) {
      res.send(responses.failed(ErrorCodes.INTERNAL_ERROR, 400));
    }
  };
}
