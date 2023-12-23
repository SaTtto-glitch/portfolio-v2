import { useEffect, useCallback, useState } from 'react';
import '../scss/pages/top.scss';

function DogAppContent() {
  return (
    <div>
      <div>
        <p className="card__title">Dogアプリ</p>
        <p className="card__info">
          犬の画像をランダムに生成するアプリ
        </p>
        <p className="card__info">HTML/CSS/JavaScipt/React</p>
      </div>
    </div>
  );
}

function ForumAppContent() {
  return (
    <div>
      <p>掲示板アプリのモーダル内容</p>
      <div className="">
        <p className="card__title">掲示板アプリ</p>
        <p className="card__info">
          作成したスレッドにコメントができるアプリ
        </p>
        <p className="card__info">HTML/CSS/javascipt(React)</p>
      </div>
    </div>
  );
}

function ReviewAppContent() {
  return (
    <div>
      <p>書籍レビューアプリのモーダル内容</p>
      <div>
        <p className="card__title">書籍レビューアプリ</p>
        <p className="card__info">書籍情報と感想を投稿できるアプリ</p>
        <p className="card-caption-info">
          ログイン機能を作成しました。
        </p>
        <p className="card-caption-info">HTML/CSS/javascipt(React)</p>
      </div>
    </div>
  );
}

function Modal({ cardType, onClick }) {
  let content;

  switch (cardType) {
    case 'dog':
      content = <DogAppContent />;
      break;
    case 'forum':
      content = <ForumAppContent />;
      break;
    case 'review':
      content = <ReviewAppContent />;
      break;
    default:
      break;
  }

  return (
    <div className="modalWrapper">
      <div id="modal" className="modal" onClick={(event) => event.stopPropagation()}>
        {content}
        <button onClick={onClick}>
          <img src="img/top/close.svg" alt="" />
        </button>
        <div className="nonScroll"></div>
      </div>
    </div>
  );
}


export const HandleScroll = ({ sectionId }: { sectionId: string }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalCardType, setModalCardType] = useState('');

  const handleScroll = () => {
    const element = document.querySelector(`#${sectionId}`);
    if (element) {
      const rect = element.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight;
      setIsVisible(isVisible);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const closeModal = useCallback(() => {
    setIsModalOpen(false)
    document.addEventListener('click', closeModal)

  }, [])

  useEffect(() => {
    return () => {
      document.removeEventListener('click', closeModal)
    }
  }, [closeModal])


  function openModal(cardType) {
    setIsModalOpen(true);
    setModalCardType(cardType);
    document.removeEventListener('click', closeModal);
  }


  return (
    <>
      <section className={`section fade ${isVisible ? 'fade-in' : ''}`} id={sectionId}>
        {
          sectionId === 'Profile' && (
            <div className="section__inner">
              <div className="section__titleBlock">
                <h2 className="section__titleBlock--title">
                  <img src="img/top/profile.svg" alt="" />
                </h2>
              </div>

              <div className="column">
                <div className="column__item u-center">
                  <div>
                    <img src="img/top/profile.JPG" alt="" />
                  </div>
                  <div className="u-column">
                    <p className="logo-title">sayatto</p>
                    <div className="sns-icon">
                      <a href='https://github.com/SaTtto-glitch' target='_blank'>
                        <img src="img/icon/github-mark.svg" alt="" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="column__item">
                  <p className="text">
                    東京のWeb制作会社でフロントエンドエンジニアをしています。
                  </p>
                  <div>

                    <div>
                      <p className='column__item--title'>▼ Skill</p>
                      <p>
                        HTML/CSS/JavaScipt/WordPress/React/Docker/Git
                      </p>
                    </div>

                    <div>
                      <p className='column__item--title'>▼ Favorite</p>
                      <p>イラスト制作/読書/映画鑑賞/ゲーム</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          )
        }

        {
          sectionId === 'works' && (
            <div className="section__inner">
              <div className="section__titleBlock">
                <h2 className="section__titleBlock--title">
                  <img src="img/top/works.svg" alt="" />
                </h2>
              </div>
              <div className="cardWrapper">
                <button className="card" onClick={() => openModal('dog')}  >
                  <div className='card__image'>
                    <img
                      src="img/top/Dog_app.gif"
                      alt=""
                    />
                  </div>
                </button>

                <button className="card" onClick={() => openModal('forum')} >
                  <div className='card__image'>
                    <img
                      src="img/top/Forum_app.gif"
                      alt=""
                    />
                  </div>

                </button>


                <div className="card" onClick={() => openModal('review')}>
                  <div className='card__image'>
                    <img
                      src="img/top/Review_app.gif"
                      alt=""
                    />

                  </div>

                </div>

              </div>
            </div>
          )
        }
        {isModalOpen ? <Modal cardType={modalCardType} onClick={() => closeModal()} /> : ""}

      </section >

    </>
  );
}
