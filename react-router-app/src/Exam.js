// URL 파라미터를 사용하여 다국어 지원을 위한 경로 만들기
// EX) /:lang/home 으로 언어코드를 받아서 해당 언어에 맞는 내용을 보여줌
// ex) /en/home, /ko/home, /jp/home
// 컴포넌트 이름은 Home


import { Outlet, useParams, Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";




const Lang = () => {
  const content =  {
    ko: {
      greeting: '안녕하세요!',
      description: '이것은 한국어 페이지입니다.',
    },
    en: {
      greeting: 'Hello!',
      description: 'This is an English page.',
    },
    jp: {
      greeting: 'こんにちは！',
      description: 'これは日本語のページです。',
    }
};

  const {lang} = useParams();
  const langContent = content[lang];

  if(!langContent){
    return <div>지원하지 않는 언어입니다.</div>
  }

  return(
    <div>
      <h1>{langContent.greeting}</h1>
      <p>{langContent.description}</p>
    </div>
  )
  
  
}

// 상품별 카테고리와 상품 상세 페이지 구현하기
// 카테고리별 상품들이 나오게 만들자
// 카테고리 경로 : /categories/:categoriId
// 상품 상세 경로 : /categories/:categoriId/products/:productId



// 카테고리
const Homee = () => {
  const categories = [
    { id: 1, name: '전자제품' },
    { id: 2, name: '의류' },
    { id: 3, name: '식료품' },
    ];

    return (
      <div>
        <h2>카테고리 페이지입니다</h2>
        <ul>
          {categories.map(category => (
            <li key={category.id}>
              <Link to={`/categories/${category.id}`}>
              {category.name} 상품 보기
              </Link>
            </li>
          ))}
        </ul>
      </div>
    )
}

const Prod = () => {
  const {categoryId} = useParams();
    // 카테고리별 상품
    const products = [
      { id: 1, name: '노트북', categoryId: '1' },
      { id: 2, name: '스마트폰', categoryId: '1' },
      { id: 3, name: '셔츠', categoryId: '2' },
      { id: 4, name: '청바지', categoryId: '2' },
      { id: 5, name: '사과', categoryId: '3' },
      { id: 6, name: '우유', categoryId: '3' },
      ];

      const filterProduct = products.filter(p => p.categoryId === categoryId);
      return (
        <div>
          <h2>카테고리{categoryId} 상품 페이지입니다</h2>
          <ul>
            {filterProduct.map(product => (
              <li key={product.id}>
                <Link to={`/categories/${categoryId}/products/${product.id}`}>
                {product.name} 상품 보기
                </Link>
              </li>
          ))}
              
          </ul>
        </div>
      )
}

const Detail = () => {
  const {productId} = useParams();
    // 상품 상세 정보를 담은 배열
    const p_detail = [
      { id: 1, name: '노트북', description: '최신형 노트북입니다.', categoryId: '1' },
      { id: 2, name: '스마트폰', description: '최신 스마트폰입니다.', categoryId: '1' },
      { id: 3, name: '셔츠', description: '멋진 셔츠입니다.', categoryId: '2' },
      { id: 4, name: '청바지', description: '편안한 청바지입니다.', categoryId: '2' },
      { id: 5, name: '사과', description: '신선한 사과입니다.', categoryId: '3' },
      { id: 6, name: '우유', description: '신선한 우유입니다.', categoryId: '3' },
    ];

    const filterDetail = p_detail.filter(p => p.id === Number(productId))
    return (
      
      <div>
        {filterDetail.map(detail => (
          <div  key={detail.id}>
          <h2>{detail.name} 상세정보 페이지입니다</h2>
        <p>{detail.description}</p>
        </div>
        ))}
      </div>
    )
}



export {Homee, Lang, Prod, Detail}