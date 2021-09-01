function Spacer({ spacer }) {
  return (
    <div
      style={{
        width: spacer.width + "px",
        height: spacer.height + "px",
      }}
    />
  );
}

export default Spacer;
