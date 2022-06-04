import React, { useEffect, useState } from "react";
import { BasicContainer } from "../styles/Style";
import { StyledPicker } from "../styles/Component";
import { useSelector } from "react-redux";
import { useMarketListWithId } from "../hooks/marketHooks";

//TODO: 행사 생성 레이아웃 변경하기 로직에 맞게

const CategoryOfMarketListWithUserId = ({ marketName, setMarketName }) => {
  const token = useSelector((state) => state.user.token);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    const loadMarketListWithUserId = async (token) => {
      const markets = await useMarketListWithId(token);
      let arr = [];

      markets.map((res) => {
        arr.push({
          value: res._id,
          label: res.marketName,
        });
      });

      setCategory([...arr]);
    };

    loadMarketListWithUserId(token);
  }, [useMarketListWithId]);

  return (
    <BasicContainer>
      {category?.length != 0 && (
        <StyledPicker
          item={marketName}
          items={category}
          onItemChange={setMarketName}
          title="소매점 목록"
          placeholder="소매점을 선택하세요"
          textInputStyle={{ textAlign: "center" }}
        />
      )}
    </BasicContainer>
  );
};

export default CategoryOfMarketListWithUserId;
