import Mailjet from 'node-mailjet';
import PricetoString from './PriceToString.js';
const mailjet = Mailjet.apiConnect('4cc070d2c78431057b99cedd411b9b84', 'c3bdd675d484ef2b94cd32ebc8434aa5');
function notifyEmail(user, information, locate, name) {
    const request = mailjet.post('send', { version: 'v3.1' }).request({
        Messages: [
            {
                From: {
                    Email: 'ngvietquannro@gmail.com',
                    Name: 'Manager of Lofi Comestic',
                },
                To: [
                    {
                        Email: `${user.email}`,
                        Name: `${name}`,
                    },
                ],
                Subject: 'ĐẶT HÀNG THÀNH CÔNG',
                TextPart: `Dear ${name}, welcome to Lofi Comestic! May the delivery force be with you!`,
                HTMLPart: `<h3> Hi ${name} </h3>
             
                    <p>Bạn đã đặt hàng thành công trên shop Lofi Comestic của chúng tôi. Vui lòng kiểm tra lại đơn hàng</p>
              
                    <p style="color: red">Tổng đơn hàng : ${PricetoString(information.totalCart.total + 100000)} </p>
                    <p>${locate}</p>
                    <p>Nếu có bất kì sai sót nào mong bạn hãy liên hệ với chúng tôi. Vào Hotline: 0763948610</p>

                    <p> Mơn nghen !!! </p>


                    `,
            },
        ],
    });
    return request;
}
export default notifyEmail;
