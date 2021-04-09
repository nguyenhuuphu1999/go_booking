import React from 'react'
import Coupon from './Coupon'

export default {
    title: "Body/Coupon",
    component: Coupon,
  };
  
const Template = (args) => <Coupon {...args} />;
  
export const DefaultCoupon = Template.bind({});
DefaultCoupon.args = {
  address: 'Vũng Tàu',
  image_url: 'https://s3-alpha-sig.figma.com/img/dada/cdbb/eaeb6fd3a399a65ea4308aeca34ac861?Expires=1611532800&Signature=NOVxIJ08rR3NN9YHdfRbA8rrD3DNIA9ewcTfbJWYnhPMv8jCmOLIHXI9UbmbcavsPAqAje~qnSzAspUtpS2T7yk6pF28IUo5rZ1mRmSFQXdxaV5HMSpsdxoOy4-GsekqbW7tJi6rBWnwu0JLnceuihvvw8qqKTJtx2XwNicqhL9WQBFjZQ6IeUwH-x-TCP8GbODJBfbRvdA4sLgxNmAec4P84qC4p6xGwxxCEPFlevRuq7LAPFhNWIlQqiVt1Rn0y0fx0jV6-Lz8fbPCpXQzs3rxYmZVJtWUtE-ygUDGPxM2-X3swIW0o6nKucmEJoccjJNy5Z-NvIlNDf8qi1UKIA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA', 
  sale_off: '10%',
  exp_date: 'Còn 6 ngày',
};