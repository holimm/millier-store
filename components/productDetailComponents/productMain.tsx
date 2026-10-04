"use client";

import {
  Button,
  Carousel,
  Col,
  Divider,
  Image,
  Row,
  Spin,
} from "antd";
import { CustomText } from "@/components/homePage/common";
import {
  ProductColorType,
  ProductDetailType,
  ProductMemoryType,
  ProductStorageType,
} from "@/models/productDetailModel";
import { NumberToDollarFormat } from "@/helpers/commonHelpers";
import { saveCart } from "@/redux/entities/cart";
import { CartType } from "@/models/cartModel";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { getCart } from "@/redux/selectors/cart";
import { isEmpty } from "lodash";
import { useEffect, useState } from "react";

export default function ProductMain({
  productDetail,
  checkProductExist,
  checkColorExist,
  productColor,
  productStorage,
  productMemory,
  openAddToCart,
  onChangeProductColor,
  onChangeProductStorage,
  onChangeProductMemory,
}: {
  productDetail: { data: ProductDetailType; loading: boolean };
  checkProductExist: boolean;
  checkColorExist: boolean;
  productColor: ProductColorType;
  productStorage: ProductStorageType;
  productMemory: ProductMemoryType;
  openAddToCart: string[] | [];
  onChangeProductColor: Function;
  onChangeProductStorage: Function;
  onChangeProductMemory: Function;
}) {
  const dispatch = useAppDispatch();
  useAppSelector(getCart);
  const productDetailData = productDetail.data;
  const [totalPriceProduct, setTotalPriceProduct] = useState(
    productDetailData.basePrice
  );

  useEffect(() => {
    let total = productDetailData.basePrice || 0;
    if (!isEmpty(productStorage)) total += productStorage.price || 0;
    if (!isEmpty(productMemory)) total += productMemory.price || 0;
    setTotalPriceProduct(total);
  }, [productDetailData, productColor, productStorage, productMemory]);

  const handleAddToCart = (data: CartType) => {
    dispatch(saveCart(data));
  };

  const galleryImages =
    checkProductExist &&
    checkColorExist &&
    productDetailData.images?.[productColor.lowercase!]
      ? productDetailData.images[productColor.lowercase!]
      : [];

  const productName = (productDetailData.name || "").toLowerCase();
  const isMacGallery = productName.includes("mac");
  // iPhone / accessories assets fill more of the frame than Mac — scale them down
  // in the PDP gallery so visual product size matches Mac shots.
  const galleryImageScaleClass = isMacGallery
    ? ""
    : productName.includes("airpods")
      ? "scale-[0.72]"
      : "scale-[0.58]";

  const showCheckout = !isEmpty(openAddToCart);

  return (
    <div className="w-full">
      <Spin spinning={productDetail.loading}>
        <CustomText
          type="paragraph"
          extraClass="!text-black !text-2xl lg:!text-4xl !font-bold"
          topClass="mb-6 lg:mb-8"
        >
          {checkProductExist && productDetailData.name}
        </CustomText>
      </Spin>

      <Row gutter={[40, 40]} align="top" className="w-full">
      <Col xs={24} lg={14} className="!max-w-full min-w-0">
        <div className="lg:sticky lg:top-28 min-w-0">
          <div className="product-detail-gallery aspect-square w-full max-w-full overflow-hidden rounded-2xl bg-white">
              {galleryImages.length > 0 ? (
                <Carousel
                  className="h-full w-full max-w-full"
                  draggable
                  autoplay
                  infinite
                  dots
                >
                  {galleryImages.map((item, index) => (
                    <div key={`${item}-${index}`} className="!h-full !w-full">
                      <div className="flex h-full w-full items-center justify-center overflow-hidden bg-white">
                        <div
                          className={`flex h-full w-full items-center justify-center ${galleryImageScaleClass}`}
                        >
                          <Image
                            src={item}
                            alt={`${productDetailData.name || "Product"} ${index + 1}`}
                            preview={false}
                            className="!h-full !w-full object-contain"
                            rootClassName="!h-full !w-full max-w-full"
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "contain",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </Carousel>
              ) : (
                <div className="h-full w-full bg-neutral-50" />
              )}
          </div>
        </div>
      </Col>

      <Col xs={24} lg={10} className="!max-w-full min-w-0">
        <div className="h-fit w-full min-w-0">
          <div className="mb-8 lg:mb-10">
            <CustomText
              type="paragraph"
              extraClass="!text-black !text-xl lg:!text-2xl !font-semibold"
            >
              Finish.{" "}
              <span className="!text-neutral-500 !font-normal">
                Pick your favorite
              </span>
            </CustomText>
            <CustomText
              type="paragraph"
              extraClass="!text-black !text-base lg:!text-lg"
              topClass="mt-2 mb-4"
            >
              Color — {productColor.label || "Select a finish"}
            </CustomText>
            <Spin spinning={productDetail.loading}>
              <div className="flex flex-wrap items-center gap-3">
                {checkProductExist &&
                  productDetailData.colors?.map(
                    (item: ProductColorType, index: number) => {
                      const selected =
                        productColor.lowercase === item.lowercase;
                      return (
                        <button
                          key={item.lowercase || index}
                          type="button"
                          aria-label={item.label}
                          title={item.label}
                          className={`h-9 w-9 rounded-full border transition-all duration-200 ${
                            selected
                              ? "border-blue-500 ring-2 ring-blue-200 scale-110"
                              : "border-neutral-300 hover:border-neutral-500"
                          }`}
                          style={{ backgroundColor: item.color }}
                          onClick={() => onChangeProductColor(item)}
                        />
                      );
                    }
                  )}
              </div>
            </Spin>
          </div>

          {!isEmpty(productDetailData.storage) && (
            <div className="mb-8 lg:mb-10">
              <CustomText
                type="paragraph"
                extraClass="!text-black !text-xl lg:!text-2xl !font-semibold"
              >
                Storage.{" "}
                <span className="!text-neutral-500 !font-normal">
                  How much space do you need?
                </span>
              </CustomText>
              <Spin spinning={productDetail.loading}>
                <div className="mt-4 flex flex-col gap-3">
                  {checkProductExist &&
                    productDetailData.storage?.map(
                      (item: ProductStorageType, index: number) => {
                        const selected =
                          productStorage.capacity === item.capacity;
                        return (
                          <button
                            key={`${item.capacity}-${item.unit}-${index}`}
                            type="button"
                            className={`flex h-20 w-full items-center rounded-xl border px-4 text-left transition-all duration-200 ${
                              selected
                                ? "border-blue-500 bg-blue-50/40"
                                : "border-neutral-300 hover:border-neutral-500"
                            }`}
                            onClick={() => onChangeProductStorage(item)}
                          >
                            <div className="flex w-full items-center justify-between gap-4">
                              <div className="min-w-0">
                                <CustomText
                                  type="paragraph"
                                  extraClass="!text-black !text-base lg:!text-lg !font-semibold"
                                >
                                  {item.capacity}
                                  {item.unit}
                                </CustomText>
                                <CustomText
                                  type="paragraph"
                                  extraClass="!text-neutral-500 !text-sm"
                                >
                                  {item.price !== 0
                                    ? `+ ${NumberToDollarFormat(item.price)}`
                                    : "\u00A0"}
                                </CustomText>
                              </div>
                              <CustomText
                                type="paragraph"
                                extraClass="!text-black !text-sm lg:!text-base"
                                topClass="text-right shrink-0"
                              >
                                From{" "}
                                {NumberToDollarFormat(
                                  (productDetailData.basePrice || 0) +
                                    (item.price || 0)
                                )}
                              </CustomText>
                            </div>
                          </button>
                        );
                      }
                    )}
                </div>
              </Spin>
            </div>
          )}

          {!isEmpty(productDetailData.memory) && (
            <div className="mb-8 lg:mb-10">
              <CustomText
                type="paragraph"
                extraClass="!text-black !text-xl lg:!text-2xl !font-semibold"
              >
                Memory.{" "}
                <span className="!text-neutral-500 !font-normal">
                  How much memory do you need?
                </span>
              </CustomText>
              <Spin spinning={productDetail.loading}>
                <div className="mt-4 flex flex-col gap-3">
                  {checkProductExist &&
                    productDetailData.memory?.map(
                      (item: ProductMemoryType, index: number) => {
                        const selected =
                          productMemory.capacity === item.capacity;
                        return (
                          <button
                            key={`${item.capacity}-${item.unit}-${index}`}
                            type="button"
                            className={`flex h-20 w-full items-center rounded-xl border px-4 text-left transition-all duration-200 ${
                              selected
                                ? "border-blue-500 bg-blue-50/40"
                                : "border-neutral-300 hover:border-neutral-500"
                            }`}
                            onClick={() => onChangeProductMemory(item)}
                          >
                            <div className="min-w-0">
                              <CustomText
                                type="paragraph"
                                extraClass="!text-black !text-base lg:!text-lg !font-semibold"
                              >
                                {item.capacity}
                                {item.unit} unified memory
                              </CustomText>
                              <CustomText
                                type="paragraph"
                                extraClass="!text-neutral-500 !text-sm"
                              >
                                {item.price !== 0
                                  ? `+ ${NumberToDollarFormat(item.price)}`
                                  : "\u00A0"}
                              </CustomText>
                            </div>
                          </button>
                        );
                      }
                    )}
                </div>
              </Spin>
            </div>
          )}

          <div
            className={`rounded-2xl border border-neutral-200 bg-neutral-50 p-5 transition-opacity duration-300 ${
              showCheckout ? "opacity-100" : "opacity-50"
            }`}
          >
            <CustomText
              type="paragraph"
              extraClass="!text-black !text-xl lg:!text-2xl !font-semibold"
            >
              Proceed.
            </CustomText>
            <CustomText
              type="paragraph"
              extraClass="!text-black !text-base"
              topClass="mt-2"
            >
              {checkProductExist && productDetailData.name}
              {productColor.label && (
                <>
                  <br />
                  {productColor.label}
                </>
              )}
              {!isEmpty(productDetailData.storage) &&
                productStorage.capacity && (
                  <>
                    <br />
                    {productStorage.capacity}
                    {productStorage.unit} Storage
                  </>
                )}
              {!isEmpty(productDetailData.memory) &&
                productMemory.capacity && (
                  <>
                    <br />
                    {productMemory.capacity}
                    {productMemory.unit} Memory
                  </>
                )}
            </CustomText>
            <Divider className="!my-4" />
            <CustomText
              type="paragraph"
              extraClass="!text-black !text-2xl !font-bold"
            >
              {NumberToDollarFormat(
                checkProductExist ? totalPriceProduct : 0
              )}
            </CustomText>
            <Button
              className="!mt-4 w-full"
              type="primary"
              size="large"
              disabled={!showCheckout || !checkProductExist}
              onClick={() => {
                handleAddToCart({
                  name: productDetailData.name,
                  storage: productStorage,
                  price: totalPriceProduct,
                  memory: productMemory,
                  color: productColor,
                  quantity: 1,
                });
              }}
            >
              Add To Cart
            </Button>
          </div>
        </div>
      </Col>
      </Row>
    </div>
  );
}
