// Item.jsx

import React, { useState } from "react";
import Pagination from "../../components/Pagination";
import { ItemBox, Title, Line, Cover, PointContainer, CottonPoint, NullContainer } from "./styles";
import character from "../../assets/feelow_character.png";
import cotton from "../../assets/cotton.png";
import nullImg from "../../assets/x_img.png";

// accessory
import accessory1 from "../../assets/accessory1.png";
import accessory2 from "../../assets/accessory2.png";
import accessory3 from "../../assets/accessory3.png";
import accessory4 from "../../assets/accessory4.png";
import accessory5 from "../../assets/accessory5.png";
import accessory6 from "../../assets/accessory6.png";
import accessory7 from "../../assets/accessory7.png";
import accessory8 from "../../assets/accessory8.png";

// feelow cover
import cover1 from "../../assets/feelow_cover1.png";
import cover2 from "../../assets/feelow_cover2.png";
import cover3 from "../../assets/feelow_cover3.png";
import cover4 from "../../assets/feelow_cover4.png";
import cover5 from "../../assets/feelow_cover5.png";
// coupon
import couponImage from "../../assets/coupon.png";

const accessoryImages = [
  accessory1,
  accessory2,
  accessory3,
  accessory4,
  accessory5,
  accessory6,
  accessory7,
  accessory8,
];
const coverImages = [cover1, cover2, cover3, cover4, cover5];

const coupon = [
  { title: "청소 면제", point: "200개" },
  { title: "지각 1회 허용", point: "200개" },
  { title: "원하는 자리 선택", point: "200개" },
  { title: null, point: null },
  { title: null, point: null },
  { title: null, point: null },
  { title: null, point: null },
  { title: null, point: null },
];

const cover = [
  { title: "단색", point: "100개" },
  { title: "산타옷", point: "100개" },
  { title: "교복", point: "100개" },
  { title: "얼룩말", point: "100개" },
  { title: "공주옷", point: "100개" },
  { title: null, point: null },
  { title: null, point: null },
  { title: null, point: null },
];

const accessory = [
  { title: "산타 모자", point: "20개" },
  { title: "비니", point: "20개" },
  { title: "헤드셋", point: "20개" },
  { title: " 볼터치", point: "20개" },
  { title: "캔버스", point: "20개" },
  { title: "구두", point: "20개" },
  { title: "안경", point: "20개" },
  { title: "선글라스", point: "20개" },
];

const itemsPerPage = 10;

export const Item = ({ onSelectItemAccessory, onSelectItemCover, selectedCategory }) => {
  console.log("Selected Category", selectedCategory);
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const handleItemClick = (index) => {
    let clickedItem, clickedCoverImage;

    switch (selectedCategory) {
      case "쿠폰":
        clickedItem = coupon[index];
        clickedCoverImage = couponImage;
        break;
      case "악세서리":
        clickedItem = accessory[index];
        clickedCoverImage = accessoryImages[index];
        onSelectItemAccessory({ item: clickedItem, coverImage: clickedCoverImage });
        break;
      case "베개커버":
        clickedItem = cover[index];
        clickedCoverImage = coverImages[index];
        onSelectItemCover({ item: clickedItem, coverImage: clickedCoverImage });
        break;
      default:
        break;
    }
  };

  const offset = currentPage * itemsPerPage;
  const itemsToDisplay =
    selectedCategory === "쿠폰" ? coupon : selectedCategory === "악세서리" ? accessory : cover;
  const coverImagesToDisplay = selectedCategory === "악세서리" ? accessoryImages : coverImages;
  const currentItems = itemsToDisplay.slice(offset, offset + itemsPerPage);
  const totalPageCount = Math.ceil(itemsToDisplay.length / itemsPerPage);

  return (
    <>
      {currentItems.map((item, index) => (
        <ItemBox key={index} onClick={() => handleItemClick(index)}>
          {item.title === null ? (
            <NullContainer>
              <img src={nullImg} alt={"null"} />
            </NullContainer>
          ) : (
            selectedCategory !== "" && (
              <>
                <Title>{item.title}</Title>
                <Line></Line>
                {selectedCategory !== "쿠폰" && selectedCategory !== "악세서리" ? (
                  <img
                    src={character}
                    alt={"feelow"}
                    style={{ width: "4.6vw", height: "11.2vh" }}
                  />
                ) : (
                  <img
                    src={selectedCategory === "쿠폰" ? couponImage : coverImagesToDisplay[index]}
                    alt={"closet"}
                    style={{
                      width: "4.7vw",
                      height: "11.29vh",
                    }}
                  />
                )}
                <Cover>
                  {selectedCategory === "쿠폰" || selectedCategory === "악세서리" ? null : (
                    <img
                      src={coverImagesToDisplay[index]}
                      alt={"closet"}
                      style={{ width: "4.6vw", height: "6.7vh" }}
                    />
                  )}
                </Cover>
              </>
            )
          )}
          {item.point !== null && (
            <PointContainer>
              <img src={cotton} alt={"point"} style={{ width: "1.6vw", height: "2.3vh" }} />
              <CottonPoint>{item.point}</CottonPoint>
            </PointContainer>
          )}
        </ItemBox>
      ))}

      <Pagination
        currentPage={currentPage}
        totalPageCount={totalPageCount}
        handlePageClick={handlePageClick}
      />
    </>
  );
};
