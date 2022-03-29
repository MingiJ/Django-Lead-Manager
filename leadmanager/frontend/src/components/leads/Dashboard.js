import React from "react";
import Form from "./Form";
import Leads from "./Leads";
import { Fragment } from "react/cjs/react.development";

export default function Dashboard() {
  return (
    <Fragment>
      <Form />
      <Leads />
    </Fragment>
  );
}
