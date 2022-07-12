import nc from "next-connect";
import dbConnect from "../../../config/dbConnect";
import { registerUsers } from "../../../controllers/users";
import { onError } from "../../../middleware/errors";

const handler = nc({ onError });

dbConnect();
handler.post(registerUsers);

export default handler;
