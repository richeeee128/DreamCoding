import "./App.css";

function AppJSX() {
  const name = "lee";
  const list = ["우유", "딸기", "바나나", "요거트"];
  return (
    <>
      <h1 className="orange">{`Hello! ${name}`}</h1>
      <h2>Hello!</h2>
      <p>{name}</p>
      <ul>
        {list.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      <img
        /*중괄호는 왜 2개 사용하는가? 자바스크립트 언어를 사용하기 때문에
        나는 이게 참 이해 안 되더라...
        객체 오브젝트를 만들거고, 그게 width 와 height 라는 말이다.
        -> 중괄호를 2개 사용하는 이유 : 태그를 위한 {} 1개와 jsx 문법에서 사용하기 위한 {} 1개라서 2개
        */
        style={{ width: "300px", height: "200px" }}
        src="https://images.unsplash.com/photo-1597200381847-30ec200eeb9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
        alt="하늘사진"
      />
    </>
  );
}

export default AppJSX;
