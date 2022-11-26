import React, { FC, HTMLProps } from 'react';

const Form: FC<HTMLProps<HTMLFormElement>> = (props) => {
  const { children } = props;

  return <form {...props}>{children}</form>;
};

export default Form;