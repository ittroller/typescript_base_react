import React, { memo } from 'react';

import { Layout, Row, Col, Skeleton } from 'antd';

import BannerImage from '../../../../assets/images/public/nomalType/banner.png';

const { Content } = Layout;

const HomeComponent = () => {
  const loading = false;

  /* eslint-disable */
  const imageLuffy =
    'https://upload.wikimedia.org/wikipedia/vi/thumb/2/25/Monkey_D._Luffy%2C_post_time-skip%2C_OP.png/500px-Monkey_D._Luffy%2C_post_time-skip%2C_OP.png';
  const imageZoro = 'https://upload.wikimedia.org/wikipedia/vi/5/50/Roronoa_Zoro.png';
  const imageNami = 'https://gamek.mediacdn.vn/133514250583805952/2020/1/20/anh-1-1579526226089645742089.jpg';
  const imageUssop =
    'https://static.wikia.nocookie.net/onepiece/images/a/aa/Photo-1-1492144424990.jpg/revision/latest?cb=20180429162045&path-prefix=vi';
  const imageSanji =
    'https://static.wikia.nocookie.net/onepiece/images/f/f3/4fbcbc7c506cc0a4b922baa3d94c76f1.jpg/revision/latest/scale-to-width-down/340?cb=20200327100810&path-prefix=vi';
  const imageChopper =
    'https://i.imacdn.com/ta/2016/09/15/fe6f47ae6e0a117b_3486830cbe8ca4a6_16257814739311769143215.jpg';
  const imageRobin = 'https://hieuungchu.com/wp-content/uploads/2019/05/2-7.png';
  const imageFranky =
    'https://static.wikia.nocookie.net/onepiece/images/5/5b/One-piece-franky-1.jpg/revision/latest?cb=20200415153939&path-prefix=vi';
  const imageBrook = 'https://i.imacdn.com/ta/2016/09/14/1d775f73628418d1_203635d53a1f744a_20490214738720215143215.jpg';
  const imageJinbe =
    'https://static.wikia.nocookie.net/onepiece/images/8/81/Jinbe_Anime_Infobox.png/revision/latest?cb=20170418090836&path-prefix=vi';
  /* eslint-enable */

  const heros = [
    { name: 'Monkey D. Luffy', price: 1500000000, power: 'Gomu Gomu', image: imageLuffy },
    { name: 'Roronoa Zoro', price: 320000000, power: 'Không', image: imageZoro },
    { name: 'Nami', price: 66000000, power: 'Không', image: imageNami },
    { name: 'Usopp', price: 200000000, power: 'Không', image: imageUssop },
    { name: 'Vinsmoke Sanji', price: 330000000, power: 'Không', image: imageSanji },
    { name: 'Tony Tony Chopper', price: 100, power: 'Hito Hito', image: imageChopper },
    { name: 'Nico Robin', price: 130000000, power: 'Hana Hana', image: imageRobin },
    { name: 'Franky', price: 94000000, power: 'Không', image: imageFranky },
    { name: 'Brook', price: 83000000, power: 'Yomi Yom', image: imageBrook },
    { name: 'Jinbei', price: 438000000, power: 'Không', image: imageJinbe },
  ];

  return (
    <div className="home-page">
      <div className="banner-wrapper">
        <img className="image" src={BannerImage} alt="banner" />
      </div>
      <Content className="content-wrapper">
        <Row>
          <Col xs={24} sm={24} md={2} lg={2} xl={2}></Col>
          <Col xs={24} sm={24} md={20} lg={20} xl={20}>
            <div className="title">
              <h2>One Piece Hero</h2>
            </div>
            <Row gutter={[16, 16]} className="row-content">
              {heros.map((item, index) => (
                <Col key={index} className="col-item" xs={24} sm={24} md={12} lg={8} xl={8} span={8}>
                  <div className="card-item">
                    <Skeleton loading={loading} avatar active>
                      <div className="card-content">
                        <div className="card-image">
                          <img alt="" className="image" src={item.image} />
                        </div>
                        <div className="card-body">
                          <div className="wrap-info">
                            <div className="row">
                              <div className="key">Tên:</div>
                              <div className="value">{item.name}</div>
                            </div>
                            <div className="row">
                              <div className="key">Tiền truy nã:</div>
                              <div className="value">{item.price} Beli</div>
                            </div>
                            <div className="row">
                              <div className="key">Trái ác quỷ:</div>
                              <div className="value">{item.power}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Skeleton>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
          <Col xs={24} sm={24} md={2} lg={2} xl={2}></Col>
        </Row>
      </Content>
    </div>
  );
};

export default memo(HomeComponent);
