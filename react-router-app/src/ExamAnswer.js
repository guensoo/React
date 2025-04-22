//URL 파라미터를 사용하여 다국어 지원을 위한 경로 만들기
//EX) /:lang/home 으로 언어코드를 받아서 해당 언어에 맞는 내용을 보여준다.
//ex) /en/home, /ko/home, /jp/home

//컴포넌트 이름은 Home

import {useParams} from 'react-router-dom'

const Home = () => {
    const {lang} = useParams();

    const content = {
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
        },
      };

      const languageContent = content[lang];

      if(!languageContent){
        return <div>지원하지 않는 언어입니다.</div>
      }

      return(
        <div>
            <h1>{languageContent.greeting}</h1>
            <p>{languageContent.description}</p>
        </div>
      )
}

export default Home;