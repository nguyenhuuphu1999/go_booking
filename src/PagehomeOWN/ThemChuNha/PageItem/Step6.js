import { Button } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'

const Step6 = () => {
    const onClick = () => {
        localStorage.setItem('step', '')
      }
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ width: '85%' }}>
          <p style={{ fontSize: '22px', margin: '29px 0px' }}>
            Cảm ơn bạn đã liên kết với chúng tôi{' '}
          </p>

          <form
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
            }}>
            <div>
              Sự yêu mến và niềm tin của quý khách hàng quý đối tác là niềm tự
              hào và thành công lớn nhất của những tôi trong quá trình phát
              triển. Để đền đáp lại tấm thiện tình này, chúng tôi sẽ không ngừng
              nâng cao chất lượng phục vụ nhằm đáp ứng tốt hơn nhu cầu của khách
              hàng và quý đối tác.
            </div>

            <div  className="btn_next">
              {/* <a href="http://localhost:3000/pagehome?id=" > */}
              <a href="/nha"
               >
                <Button
                
                  style={{
                    margin: 'auto',
                    marginTop: '10%',
                    borderRadius: '20px',
                 
                    outline: 'none',
                  }}
                  variant="contained"
                  color="secondary"
                  onClick={onClick}>
                  Finish
                </Button>
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Step6
