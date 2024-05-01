import {db} from '../db/db'
import { Request, Response } from "express"
import { HTTP_STATUSES } from '../settings'
//import {OutputVideoType} from '../input-output-types/video-types'
 

export const getVideosController = (req: Request, res: Response): void => {
    res.status(HTTP_STATUSES.OK_200).json(db.videos)
    console.log("video: ", db.videos)
}
 