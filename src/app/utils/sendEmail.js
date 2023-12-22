import Mailjet from 'node-mailjet';

const mailjet = Mailjet.apiConnect('4cc070d2c78431057b99cedd411b9b84', 'c3bdd675d484ef2b94cd32ebc8434aa5');
function sendEmailForgotPassword(user, token) {
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
                        Name: `${user.userName}`,
                    },
                ],
                Subject: 'RESERT PASSWORD FROM LOFI COMESTIC',
                TextPart: `Dear ${user.userName}, welcome to Lofi Comestic! May the delivery force be with you!`,
                HTMLPart: `<h3> Hi ${user.userName} </h3>

                    <p> Bạn vừa nhận được một yêu cầu lấy lại mật khẩu cho cửa hàng Lofi Comestic </p>

                    <p>Nếu như không muốn thay đổi mật khẩu, vui lòng bỏ qua email. Email này chỉ hiệu lực trong 30p </p>
                    <p>Nếu muốn thay đổi mật khẩu vui lòng nhấn vào dường link sau đây</p>
                    <p><a href='http://localhost:3000/forgot?code=${token}&email=${user.email}'> Nhấn vào đây </a></p>

                    <p> Mơn nghen !!! </p>


                    `,
            },
        ],
    });
    return request;
}
export default sendEmailForgotPassword;
