function Feedback({ comment, img, user }) {
  const imgStyle = {
    borderRadius: '50%',
    width: '190px',
    height: '184px',
  }

  return (
    <div className="feedback">
      <div>
        <img style={imgStyle} src={img} alt="" />
      </div>
      <p style={{ marginBottom: '50px' }}>{comment}</p>
      <p>{user.address}</p>
    </div>
  )
}

export default Feedback
