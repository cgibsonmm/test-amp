import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const PostCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Body" multiline source="body" />
        <TextInput label="Title" source="title" />
      </SimpleForm>
    </Create>
  );
};
