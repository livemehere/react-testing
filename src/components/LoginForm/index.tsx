import React, { FormEvent, useState } from "react";
import useInput from "../../hooks/useInput";

const LoginForm = () => {
  const { value: id, onChange: onChangeId, reset: resetId } = useInput("");
  const { value: pw, onChange: onChangePw, reset: resetPw } = useInput("");
  const [isLogin, setIsLogin] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(id, pw);

    if (id === "rhdxoals" && pw === "1234") {
      alert("로그인 성공!");
      setIsLogin(true);
    } else {
      alert("로그인 실패");
      resetId();
      resetPw();
    }
  };

  if (isLogin) {
    return <h2>{id}님 환영합니다</h2>;
  }

  return (
    <form onSubmit={onSubmit}>
      <input type="text" placeholder="ID" value={id} onChange={onChangeId} />
      <input
        type="password"
        placeholder="PW"
        value={pw}
        onChange={onChangePw}
      />
      <button>로그인</button>
    </form>
  );
};

export default LoginForm;
