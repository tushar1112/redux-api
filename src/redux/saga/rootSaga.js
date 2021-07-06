import { takeLatest } from "@redux-saga/core/effects";
import {ActionType} from "../contants/ActionType"
import { handleGetUser } from "./Handlers/user";

export function* watcherSaga(){
  yield takeLatest(ActionType.GET_USER,handleGetUser)

}