import { Box, Image, Link, VStack } from "@chakra-ui/react";
import React from "react";
import GlowyText from "../../animators/GlowyText";

export interface BookProps {
  title: string;
  author: string;
  year: number;
  tipper: string;
  cover: string;
  link: string;
}

const Book: React.FC<BookProps> = ({ title, cover, link }) => {

//   let bookStyle = {
//     display: "flex";
//     justify-content: "center";
//   align-items: center;
//   position: relative;
//
// .book::before {
//     display: block;
//     content: "";
//     height: 100%;
//     width: 45%;
//     position: absolute;
//     background-image: url(https://i.imgur.com/5udcDlp.png);
//     background-size: 100% auto;
//     background-repeat: no-repeat;
//     top: 85%;
//     left: 32.5%;
//   }
//   }

  let shadow = {
    // "display": block;
    // content: "";
    // height: 100%;
    // width: 45%;
    // position: absolute;
    // background-image: url(https://i.imgur.com/5udcDlp.png);
    // background-size: 100% auto;
    // background-repeat: no-repeat;
    // top: 85%;
    // left: 32.5%;
  };

  const basicBoxStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    // boxSize: "250px",
    color: "white",
    textShadow: "0 0 20px black",
    fontWeight: "bold",
    fontSize: "20px",
    px: 4,
    background: cover
  };

  return (
    <Link href={link} target="_blank">
      <VStack
        position="relative"
        justifyContent="center"
        alignItems="center"
        dropShadow="2px 2px 2px #F0F"
      >
        <Box sx={basicBoxStyles} filter="auto" saturate="120%" _hover={{ saturate: "1000%" }} transition="1s">
          <Image src={cover} maxHeight={"md"} />
        </Box>
        <GlowyText text={title} />
      </VStack>
    </Link>
  );
};

export default Book;
