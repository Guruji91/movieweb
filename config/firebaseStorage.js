import { getStorage } from "firebase-admin/storage";
import { initializeApp, cert } from "firebase-admin/app";
import dotenv from "dotenv";

dotenv.config();

initializeApp({
  credential: cert({
    type: process.env.FIREBASE_TYPE,
    project_id: process.env.PROJECT_ID,
    private_key_id: process.env.PRIVATE_KEY_ID,
    private_key: `
    -----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC4CFAIP6e1bcMB\nzj0SJY0oXHuUHdes4Bu+KJ54QDQ1t7jdTZAYuL/aorEas+NQFfCOPaLDTe/miySf\n3gSggU2zSxieE6bQH63cZdTEVYYRs1zmsiZ7nxXqRRvwsyG3hyFVy7ZE5/nAtORX\nyBbDgfOIIqewAptIxMETQ9DlEQQXuo8xXBYlW05gQp9ubEz7p6odi4CMA23cbD0r\nZMwP6i+GPdQ0/188ZmpLyY4z6xFwAtjSOY8NLcC8ZNLfRMMRdn0OrGo1V3HYpgGs\nb9g4lHqXgyanVBaeE8v4UCy1JFZzVi15fHx/JFu/0/YE4Jc0TXDk1ted+YsQXlOv\nesOBpwnXAgMBAAECggEAREoZYKY2VnWvejkMonI6yjJfTRwxzx2uTccG3vp8JT7S\no5RHl1TfJINgktcTz8EEbdPjVPPTxMn3QjeBogm5SoHgVbBXIz3OJ03GQUC3KlRT\ncevDqfXjjPYuIwhlx5OmRA7+yN0H6YF2hjhichQDyY2Kih69fqg8OSjeGFJTIXZe\nwmpdCa4GWF3cQrm9fKoGn6Ztz0DJ4fc++R0rM/JH2yXpXd9S2U/wijswg8VVXrhv\ndqIn6DQNeC03NBKd36L8cSm8UXni0FKOaCCaD816P6PPqBtOH5OmAfvv5v3EGaj5\nsnijWaLihdE76uRVh8ilLC7VCKuNs0454naktzWpiQKBgQD/CjV6RgsnI+VU4+Lc\nCK4P9A3Xv1LfR6Hns5/nebhQHAKUItoTK9aDuPHjb+JckAFnIV8Wmznn0lejAntW\nfsWRuLK06FR8U0bra0haPZUmIORt8M/JH0UYourTWTpevHO0KLShfPzOVlhm676W\n/XRPxMfYG4qapsmFeODSYW+h/QKBgQC4uavcuicsIGnqqvr1nQzfpw2pE5zUEiQ7\noaSdVHXw1Qx+3X6A9HU6OlYd9dvUXCZOjUQ3bZr75GmY5+T5Ik8amXCCDewvyMqW\nxLT66w3gms9yXRJI+wk2aqEBXeAaZUJr46V3bCgI8lKJ/crNpy1gG8uSbRGCpBb3\nfe+AXWeJYwKBgFgRx2vE2j8W1y+cTg+bc7gQl+Mjr1NpIhCn55UAZFRNh9ptuo6a\nOcZczDK0xR8fn0xkqrhcu/9AlIC2765rsn/intt3ywzvmPLcpix7TZDQFPGeEbKq\n+KpMP/jhvBVQ0EerMsz9IzOBf59y0urC9TJCipwmzpMe+0H6/u/HM8xlAoGBAKGC\nFPWD/MPkAzceDxW4Ho1dLeBqOXBh/DP2/Epikkvium4hkn2FPwmN/8VqNK3Tc9qy\nQLaFqkAaUQlTlysMCEWlam0LZznQQPDZQ7Mu2I9MS5weK+KLOl7Nk7/yKAJsDkru\nWrmzYr2PwQLNVwe/5zhklPSNUAX9GeeBwGlnQSMpAoGBANYDREoJflANZKvM7ljo\ngWN+yBBYaLK1E0P8v0ys1r/XzQQ+ceuL1LydSPLT0jy1uE7bA7dGeki2N1C46p1l\n1MtcQOEbXiY9RKZLSoBD0Ap123dnnKv2udZwr2eXWwQz75UVMqybspxNW+yWtmPj\npfZqs34IA2z2YbIt8YAjb4nm\n-----END PRIVATE KEY-----\n
    `,
    client_email: process.env.CLIENT_EMAIL,
    client_id: process.env.CLIENT_ID,
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_x509_cert_url: process.env.CLIENT_X509_CERT_URL,
  }),
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
});

const storage = getStorage().bucket();

export default storage;
