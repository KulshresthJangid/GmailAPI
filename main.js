const { sendMail } = require('./gmail');

const main = async (code) => {
    //   const fileAttachments = [
    //     {
    //       filename: 'attachment1.txt',
    //       content: 'This is a plain text file sent as an attachment',
    //     },
    //     {
    //       path: path.join(__dirname, './attachment2.txt'),
    //     },
    //     {
    //       filename: 'websites.pdf',
    //       path: 'https://www.labnol.org/files/cool-websites.pdf',
    //     },

    //     {
    //       filename: 'image.png',
    //       content: fs.createReadStream(path.join(__dirname, './attach.png')),
    //     },
    //   ];

    const options = {
        to: 'kulshresthjangid@gmail.com, vishakhasainani26@gmail.com',
        cc: 'cc1@example.com, cc2@example.com',
        replyTo: 'amit@labnol.org',
        subject: 'Hello Amit 🚀',
        text: 'This email is sent from the command line',
        html: `<p><h1>The quick brown fox jump over right the black dog.</h1></p>`,
        //attachments: fileAttachments,
        textEncoding: 'base64',
        headers: [
            { key: 'X-Application-Developer', value: 'Amit Agarwal' },
            { key: 'X-Application-Version', value: 'v1.0.0.2' },
        ],
    };

    const messageId = await sendMail(options, code);
    return messageId;
};

module.exports = { main }