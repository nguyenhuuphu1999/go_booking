import React from 'react'

import './Form.css'

const Form = () => {
  return (
    <div className="form">
      <form method="post">
        <label for="name">Họ tên:</label>
        <input type="text" id="name" name="user_name" />
        <label for="mail">Email:</label>
        <input type="email" id="mail" name="user_email" />
        <label for="mail">Nhập lại email:</label>
        <input type="re_email" id="re_mail" name="user_email" />
        <label for="phone">Số điện thoại:</label>
        <input type="phone" id="phone" name="re_phone" />
        <label for="job">Quôc gia:</label>
        <select id="job" name="user_job">
            <option value="VN">Việt Nam</option>
            <option value="US">Mỹ</option>
            <option value="UK">Anh</option>
            <option value="JP">Nhật Bản</option>
            <option value="RUS">Nga</option>
        </select>
      </form>
    </div>
  )
}

export default Form
