type data = {
  type: String;
  img: any;
  title: String;
  desc: String;
  link: String;
  sc: Number;
  created: String;
  kind: String;
  teck: String;
  id: Number;
  source: any;
};
const data = [
  // SKILL
  {
    type: "skill",
    img: [
      {
        id: 1,
        skill: "Boostrap",
        source: require("@/assets/images/skill/boos.png"),
      },
      {
        id: 2,
        skill: "HTML",
        source: require("@/assets/images/skill/html.png"),
      },
      {
        id: 3,
        skill: "CSS",
        source: require("@/assets/images/skill/css.png"),
      },
      {
        id: 4,
        skill: "Javascript",
        source: require("@/assets/images/skill/js.png"),
      },
      {
        id: 5,
        skill: "React JS and Native",
        source: require("@/assets/images/skill/react.png"),
      },
      {
        id: 6,
        skill: "Node JS",
        source: require("@/assets/images/skill/node.png"),
      },
      {
        id: 7,
        skill: "GitHub",
        source: require("@/assets/images/skill/gh.png"),
      },
      {
        id: 8,
        skill: "GitLab",
        source: require("@/assets/images/skill/gl.png"),
      },
      {
        id: 9,
        skill: "Express JS",
        source: require("@/assets/images/skill/ex.png"),
      },
      {
        id: 10,
        skill: "Knex JS",
        source: require("@/assets/images/skill/knex.png"),
      },
      {
        id: 11,
        skill: "Java",
        source: require("@/assets/images/skill/java.png"),
      },
      {
        id: 12,
        skill: "Visual Studio Code",
        source: require("@/assets/images/skill/vsc.png"),
      },
      {
        id: 13,
        skill: "PostgreSQL",
        source: require("@/assets/images/skill/post.png"),
      },
    ],
  },
  // PORTOFOLIO
  {
    type: "portofolio",
    img: [
      {
        id: 1,
        title: "SIPEJANTANPRO",
        created: "May 2024",
        kind: " FRONT END WEBSITE (FINISH)",
        teck: "EJS, Express JS, Boostrap, AOS, HTML, CSS, Node Js, Javascript",
        source: require("@/assets/images/sipejantan.png"),
        link: "https://github.com/Rasyahodhe/Project_Sipejantanpro_v1",
      },
      {
        id: 2,
        title: "TEMANSIBIMA",
        created: "Juli 2024",
        kind: " FRONT END WEBSITE (FINISH)",
        teck: "EJS, Express JS, Boostrap, AOS, HTML, CSS, Node JS, Javascript",
        source: require("@/assets/images/temansibima.png"),
        link: "https://github.com/Rasyahodhe/Project-temansibima-v1",
      },
      {
        id: 3,
        title: "MUNA DESTINASI",
        created: "May 2024",
        kind: " FULL STACK WEBSITE (FINISH)",
        teck: "EJS, Express JS, Boostrap, AOS, HTML, CSS, PostgreSQL, Knex.js, Node.js, Javascript",
        source: require("@/assets/images/munades.png"),
        link: "https://github.com/Rasyahodhe/24001107_44_Lao_munaDestination_Challenge-Gold",
      },
      {
        id: 4,
        title: "PENGADUAN MASYARAKAT",
        created: "Juli 2024",
        kind: " FULL STACK WEBSITE (FINISH)",
        teck: "React, Express JS, Boostrap, AOS, HTML, CSS, PostgreSQL, Knex.js, Node.js, Javascript",
        source: require("@/assets/images/pgm.png"),
        link: "https://github.com/orgs/Binar-Pengaduan-Masyarakat/repositories",
      },
      {
        id: 5,
        title: "SATU PETA SULTRA",
        created: "Juli 2024",
        kind: " FRONT END WEBSITE (ON PROGRESS)",
        teck: "EJS, Express JS, Boostrap, AOS, HTML, CSS, Node.js, Javascript",
        source: require("@/assets/images/satupeta.png"),
        link: "https://github.com/orgs/Binar-Pengaduan-Masyarakat/repositories",
      },
    ],
  },
  {
    type: "contact",
    img: [
      {
        sc: 1,
        title: "Telegram",
        source: require("@/assets/images/social/tel.png"),
        link: "https://t.me/Ldrahimsyah",
      },
      {
        sc: 2,
        title: "WhatsApp",
        source: require("@/assets/images/social/wa.png"),
        link: "https://wa.link/e4ygn3",
      },
      {
        sc: 3,
        title: "Facebook",
        source: require("@/assets/images/social/fb.png"),
        link: "https://www.facebook.com/rasyah.smandara?mibextid=ZbWKwL",
      },
      {
        sc: 4,
        title: "Instagram",
        source: require("@/assets/images/social/ig.png"),
        link: "https://www.instagram.com/rahimsyahode/",
      },
      {
        sc: 5,
        title: "GitHub",
        source: require("@/assets/images/social/ghgh.png"),
        link: "https://github.com/Rasyahodhe",
      },
      {
        sc: 6,
        title: "Linkedin",
        source: require("@/assets/images/social/link.png"),
        link: "https://www.linkedin.com/in/la-ode-rahimsyah-02a3291bb",
      },
    ],
  },
];

export default data;
