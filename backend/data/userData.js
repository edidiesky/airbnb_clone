import bcrypt from "bcryptjs";

const userData = [
  {
    username: "Jeremy",
    image: "/images/face_2.jfif",
    country: "Belgium",
    email: "kajzu@tubon.ca",
    createdAt: "1/17/2020",
    password: bcrypt.hashSync("12345", 10),
    role: "user",
    about: {},
  },
  {
    username: "Birdie",
    image: "/images/face_1.jfif",
    country: "United Arab Emirates",
    email: "mojad@avsol.cx",
    createdAt: "1/17/2020",
    password: bcrypt.hashSync("12345", 10),
    role: "user",
    about: {},
  },
  {
    username: "Gussie",
    image: "/images/face_3.jfif",
    country: "Christmas Island",
    email: "ivfufo@zapfom.rs",
    createdAt: "1/17/2020",
    password: bcrypt.hashSync("12345", 10),
    role: "user",
    about: {},
  },
  {
    username: "Ralph",
    image: "/images/face_4.jfif",
    country: "Australia",
    email: "dara@focis.pe",
    createdAt: "1/17/2020",
    password: bcrypt.hashSync("12345", 10),
    role: "user",
    about: {},
  },
];

export default userData;
