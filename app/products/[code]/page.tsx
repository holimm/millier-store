"use client";

import { Button, Collapse, Radio, RadioChangeEvent, Spin } from "antd";
import { motion } from "framer-motion";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useEffect, useMemo, useState } from "react";
import { fetchProductDetailById } from "@/redux/entities/productsDetail";
import { useParams } from "next/navigation";
import { getProductDetail } from "@/redux/selectors/products";
import { isEmpty, toString } from "lodash";
import {
  ProductColorType,
  ProductDetailDescription,
  ProductDetailType,
  ProductMemoryType,
  ProductStorageType,
} from "@/models/productDetailModel";
import DescriptionTabItem from "@/components/productDetailComponents/descriptionTab";
import SpecificationTab from "@/components/productDetailComponents/specificationTab";
import ProductMain from "@/components/productDetailComponents/productMain";

export default function ProductDetailsPage() {
  const dispatch = useAppDispatch();
  const params = useParams<{ code: string }>();
  const productCode: string = toString(params?.code);
  const [productColor, setProductColor] = useState<ProductColorType>({});
  const [productStorage, setProductStorage] = useState<ProductStorageType>({});
  const [productMemory, setProductMemory] = useState<ProductMemoryType>({});
  const [descriptionTab, setDescriptionTab] = useState<string>("overview");
  const [openAddToCart, setOpenAddToCart] = useState<string[] | []>([]);

  useEffect(() => {
    if (!isEmpty(productCode)) dispatch(fetchProductDetailById(productCode));
  }, [productCode]);

  const productDetail = useAppSelector(getProductDetail);
  const productDetailData = productDetail.data;

  useEffect(() => {
    if (isEmpty(productDetailData)) return;
    if (!isEmpty(productDetailData.colors)) {
      setProductColor(productDetailData.colors[0]);
    }
    if (!isEmpty(productDetailData.storage)) {
      setProductStorage(productDetailData.storage[0]);
    } else {
      setProductStorage({});
    }
    if (!isEmpty(productDetailData.memory)) {
      setProductMemory(productDetailData.memory[0]);
    } else {
      setProductMemory({});
    }
  }, [productDetailData]);

  useEffect(() => {
    if (isEmpty(productDetailData)) {
      setOpenAddToCart([]);
      return;
    }
    if (isEmpty(productDetailData.storage)) {
      !isEmpty(productColor) && setOpenAddToCart(["1"]);
    } else if (isEmpty(productDetailData.memory)) {
      if (!isEmpty(productColor) && !isEmpty(productStorage))
        setOpenAddToCart(["1"]);
      else setOpenAddToCart([]);
    } else if (
      !isEmpty(productColor) &&
      !isEmpty(productStorage) &&
      !isEmpty(productMemory)
    ) {
      setOpenAddToCart(["1"]);
    } else {
      setOpenAddToCart([]);
    }
  }, [productDetailData, productColor, productStorage, productMemory]);

  const checkProductExist = useMemo(() => {
    return !isEmpty(productDetailData);
  }, [productDetailData]);

  const checkColorExist = useMemo(() => {
    return !isEmpty(productColor);
  }, [productColor]);

  const onChangeProductColor = (color: ProductColorType) => {
    setProductColor(color);
  };

  const onChangeProductStorage = (storage: ProductStorageType) => {
    setProductStorage(storage);
  };

  const onChangeProductMemory = (memory: ProductMemoryType) => {
    setProductMemory(memory);
  };

  const onChangeDescriptionTab = (e: RadioChangeEvent) => {
    setDescriptionTab(e.target.value);
  };

  // console.log("Product List: ", productDetail);
  // console.log("Product Color: ", productColor);
  // console.log("Product Storage: ", productStorage);

  return (
    <main className={`h-fit w-full`}>
      <div className="h-full w-full flex justify-center items-center">
        <div className="h-fit w-11/12 lg:w-3/4 pt-8 lg:pt-12 py-10 lg:py-16">
          <ProductMain
            productDetail={productDetail}
            checkProductExist={checkProductExist}
            checkColorExist={checkColorExist}
            productColor={productColor}
            productStorage={productStorage}
            productMemory={productMemory}
            openAddToCart={openAddToCart}
            onChangeProductColor={onChangeProductColor}
            onChangeProductStorage={onChangeProductStorage}
            onChangeProductMemory={onChangeProductMemory}
          />

          <div className="h-fit w-full mx-auto my-10 lg:my-16">
            <Radio.Group
              className="flex justify-center"
              size="large"
              value={descriptionTab}
              onChange={onChangeDescriptionTab}
              style={{ marginBottom: 16 }}
            >
              <Radio.Button value="overview">Overview</Radio.Button>
              <Radio.Button value="specifications">Specifications</Radio.Button>
            </Radio.Group>
            <div className="h-fit w-full mx-auto mt-8 lg:mt-12">
              {descriptionTab === "overview" && (
                <Spin spinning={productDetail.loading}>
                  {checkProductExist &&
                    productDetailData.description.map(
                      (item: ProductDetailDescription, index: number) => (
                        <div key={index}>
                          <DescriptionTabItem
                            type={item.type}
                            title={item.label}
                            content={item.content}
                          />
                        </div>
                      )
                    )}
                </Spin>
              )}
              {descriptionTab === "specifications" && (
                <Spin spinning={productDetail.loading}>
                  <SpecificationTab
                    checkProductExist={checkProductExist}
                    productDetail={productDetail.data}
                    productCode={productCode}
                  />
                </Spin>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
