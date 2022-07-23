import useKeyPress from "../hooks/useKeyPress";

const KeyPress = () => {
  const aPressed = useKeyPress("a");
  const sPressed = useKeyPress("s");
  const dPressed = useKeyPress("d");
  const fPressed = useKeyPress("f");

  const style = {
    display: 'flex'
  }

  return (
    <div>
      <div style={style}>
        {aPressed && <h1>👨🏾‍⚕️</h1>}
        {sPressed && <h1>🗣</h1>}
        {dPressed && <h1>🙀</h1>}
        {fPressed && <h1>😵</h1>}
      </div>
    </div>
  )

}

export default KeyPress;