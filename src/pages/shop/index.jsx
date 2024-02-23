// Import statements...
import React, { useState } from "react";
import { PageContainer } from "../home/style";
import {
  AdditionBackground,
  Character,
  StylingContainer,
  ItemSpace,
  Category,
  CatgoryButton,
  PurchaseButton,
} from "./style";
import Header from "../../layouts/Header";
import ButtonBox from "../../layouts/ButtonBox";
import { Item } from "../../layouts/ItemBox";
import Modal from "../../components/Modal";
import frame from "../../assets/feelow_frame.png";
import character from "../../assets/feelow_character.png";

const IndexPage = () => {
  const user = { name: "냠냠", cotton: 0 };
  const [selectedCategory, setSelectedCategory] = useState("베개커버");
  const [selectedItemAccessory, setSelectedItemAccessory] = useState(null);
  const [selectedItemCover, setSelectedItemCover] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleItemSelectAccessory = ({ item, coverImage }) => {
    setSelectedItemAccessory({ item, coverImage });
  };

  const handleItemSelectCover = ({ item, coverImage }) => {
    setSelectedItemCover({ item, coverImage });
  };

  const handlePurchase = () => {
    setIsModalOpen(true);
    // Use selectedItemAccessory and selectedItemCover as needed in the modal.
  };

  return (
    <PageContainer>
      <Modal
        isOpen={isModalOpen}
        setModalOpen={setIsModalOpen}
        modalText={
          selectedItemAccessory
            ? selectedItemAccessory.item.title
            : selectedItemCover
              ? selectedItemCover.item.title
              : ""
        }
      />
      <Header />
      <ButtonBox cottonCount={user.cotton} page="store" />
      <AdditionBackground>
        <StylingContainer>
          <Character>
            <div style={{ position: "relative", width: "17.97vw", height: "31.94vh" }}>
              <img src={frame} alt="Feelow_Frame" style={{ width: "100%", height: "100%" }} />
              {selectedItemAccessory && (
                <img
                  src={selectedItemAccessory.coverImage}
                  alt="Accessory cover"
                  style={{
                    width: "10.4vw",
                    height: "27vh",
                    position: "absolute",
                    top: "50%",
                    left: "51.5%",
                    transform: "translate(-55%, -52%)",
                    zIndex: 1,
                  }}
                />
              )}
              {selectedItemCover && (
                <img
                  src={selectedItemCover.coverImage}
                  alt="Cover"
                  style={{
                    width: "10.3vw",
                    height: "14.8vh",
                    position: "absolute",
                    top: "65%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    zIndex: 1,
                  }}
                />
              )}
              {!selectedItemAccessory && (
                <img
                  src={character}
                  alt="Feelow_Character"
                  style={{
                    width: "10.4vw",
                    height: "26vh",
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-51%, -50%)",
                    zIndex: 0,
                  }}
                />
              )}
            </div>
            <PurchaseButton
              style={
                selectedItemAccessory || selectedItemCover
                  ? { backgroundColor: "#D7AB6E", color: "#fff" }
                  : { backgroundColor: "#fff" }
              }
              onClick={handlePurchase}
            >
              구매
            </PurchaseButton>
          </Character>

          <Category>
            <CatgoryButton
              textLength={2}
              onClick={() => handleCategoryClick("쿠폰")}
              className={selectedCategory === "쿠폰" ? "selected" : ""}
            >
              쿠폰
            </CatgoryButton>
            <CatgoryButton
              textLength={4}
              onClick={() => handleCategoryClick("베개커버")}
              className={selectedCategory === "베개커버" ? "selected" : ""}
            >
              베개 커버
            </CatgoryButton>
            <CatgoryButton
              textLength={4}
              onClick={() => handleCategoryClick("악세서리")}
              className={selectedCategory === "악세서리" ? "selected" : ""}
            >
              악세서리
            </CatgoryButton>
          </Category>
          <ItemSpace>
            <Item
              onSelectItemAccessory={handleItemSelectAccessory}
              onSelectItemCover={handleItemSelectCover}
              selectedCategory={selectedCategory}
            />
          </ItemSpace>
        </StylingContainer>
      </AdditionBackground>
    </PageContainer>
  );
};

export default IndexPage;
