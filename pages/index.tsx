import BannerCard from '@components/common/banner-card';
import Container from '@components/ui/container';
import Layout from '@components/layout/layout';
import BannerWithProducts from '@containers/banner-with-products';
import Divider from '@components/ui/divider';
import Support from '@components/common/support';
import ProductsFlashSaleBlock from '@containers/product-flash-sale-block';
import BannerSliderBlock from '@containers/banner-slider-block';
import NewArrivalsProductFeed from '@components/product/feeds/new-arrivals-product-feed';
import { homeThreeBanner as banner } from '@framework/static/banner';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { ROUTES } from '@utils/routes';
import { GetStaticProps } from 'next';

export default function Home() {
  return (
    <>
      <BannerSliderBlock />
      <Container>
        <ProductsFlashSaleBlock date={'2023-03-01T01:02:03'} />
      </Container>
      <Container>
        <BannerCard
          key={`banner--key${banner[0].id}`}
          banner={banner[0]}
          href={'/'||`${ROUTES.COLLECTIONS}/${banner[0].slug}`}
          className="mb-12 lg:mb-14 xl:mb-16 pb-0.5 lg:pb-1 xl:pb-0"
        />
        <BannerWithProducts
          sectionHeading="text-on-selling-products"
          categorySlug="/search"
        />
        <NewArrivalsProductFeed />
        <Support />
      </Container>
      <Divider className="mb-0" />
    </>
  );
}

Home.Layout = Layout;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, [
        'common',
        'forms',
        'menu',
        'footer',
      ])),
    },
  };
};
