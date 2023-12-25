import { useEffect, useCallback, useState } from 'react';
import { Modal } from './Modal';
import '../scss/pages/top.scss';

export const HandleScroll = ({ sectionId }: { sectionId: string }) => {
  /* 
  モーダルの開閉を管理するstate  */
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalCardType, setModalCardType] = useState('');
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
  /* 
  モーダルの開閉を管理するstateここまで */

  return (
    <>
      <div className='sticky-container'>
        <section className={`section fixed-section`} id={sectionId}>
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
                      <div>
                        <a href='/portfolio-v2/blog'>
                          blog
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
      </div>
    </>
  );
}
