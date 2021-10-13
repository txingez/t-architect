import React from 'react';
import './HomePage.scss'
import Slider from 'react-slick'

const sliderConfig = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
}

const aspectItems = [
    {
        key: 'pencil-ruler',
        title: 'Thiết kế kiến trúc và cảnh quan',
        desc: 'Các công trình kiến trúc kết hợp với cảnh quan xung quanh'
    },
    {
        key: 'rocket',
        title: 'Phát triển dự án',
        desc: 'Định hướng phát triển các dự án quy hoạch vùng và quy hoạch nông thôn'
    },
    {
        key: 'building',
        title: 'Quy hoạch đô thị và nông thôn',
        desc: 'Các dự án Quy hoạch đô thị mới và phát triển nông thôn'
    },
    {
        key: 'shape',
        title: 'Thiết kế hồ sơ Quy hoạch & Kiến Trúc',
        desc: 'Hồ sơ các dự án quy hoạch theo quy định của nhà nước hiện hành'
    },
    {
        key: 'bulb',
        title: 'Thiết kế đô thị',
        desc: 'Cụ thể hoá nội dung quy hoạch chung và quy hoạch chi tiết xây dựng đô thị'
    },
]

const stepItems = [
    {
        key: 'step-1',
        title: 'KHẢO SÁT ĐÁNH GIÁ HIỆN TRẠNG',
        desc: 'Công đoạn đi khảo sát cũng như đánh giá hiện trạng tại khu vực nghiên cứu'
    },
    {
        key: 'step-2',
        title: 'PHÁT TRIỂN Ý TƯỞNG',
        desc: 'Aenean commodo nec ligula eget cum sociis dolor.'
    },
    {
        key: 'step-3',
        title: 'GIẢI PHÁP ĐẦU TƯ PHÁT TRIỂN',
        desc: 'Aenean commodo nec ligula eget cum sociis dolor.'
    },
    {
        key: 'step-4',
        title: 'HOÀN THIỆN DỰ ÁN',
        desc: 'Aenean commodo nec ligula eget cum sociis dolor.'
    },
]

class HomePage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            activeAspect: null,
            activeStep: null,
            sliders: [
               {
                   img: '/images/home/banner-1.png',
                   name: 'Xuân Đài Bay 1',
               },
               {
                    img: '/images/home/banner-2.png',
                    name: 'Trường đại học FPT',
                } ,
                {
                    img: '/images/home/banner-2.png',
                    name: 'Xuân Đài Bay 2',
                } 
            ],
            currentSliderIdx: 0
        }
    }

    componentDidMount () {
        setInterval(() => {
            this.handleSlide('next')
        }, 5000)
    }

    handleActiveAspect = (key) => {
        const {activeAspect} = this.state
        if (key == null)  {
            this.setState({activeAspect: key})
            return
        }
        if (activeAspect !== key) {
            this.setState({activeAspect: key})
        }
    }

    handleActiveStep = (key) => {
        const {activeStep} = this.state
        if (key == null)  {
            this.setState({activeStep: key})
            return
        }
        if (activeStep !== key) {
            this.setState({activeStep: key})
        }
    }

    handleSlide = (action) => {
        const { currentSliderIdx, sliders } = this.state

        if (action === 'prev') {
            const prevIdx = currentSliderIdx - 1
            this.setState({currentSliderIdx: prevIdx >= 0 ? prevIdx : (sliders.length - 1)})
        } else if (action === 'next') {
            const nextIdx = currentSliderIdx + 1
            this.setState({currentSliderIdx: nextIdx <= (sliders.length - 1) ? nextIdx : 0})
        }
    }

    render () {
        const {activeAspect, activeStep, currentSliderIdx, sliders} = this.state
        return (
            <div className="homePage">
                <section className="banner" style={{backgroundImage: `url('${sliders[currentSliderIdx]?.img}')`}}>
                    {/* Nav go here */}
                    <nav></nav>

                    <div className="layer"></div>
                    <div className="socialBtnBanner">
                        <img src="/images/home/fb.svg" alt="FB" />
                        <img src="/images/home/ins.svg" alt="Ins" />
                    </div>
                    <div className="mobileBottom">
                        <div className="sliderControl">
                                <div className="control">
                                    {sliders.map((slider, idx) => <div 
                                        className={`item ${currentSliderIdx === idx ? 'active' : ''}`}
                                        onClick={() => this.setState({currentSliderIdx: idx})}
                                    >0{idx + 1}</div>)}
                                </div>
                            </div>
                    </div>
                    <div className="bottom">
                            <div className="moreInfo">
                                <div className="contact">
                                    <img src="/images/home/telephone.svg" alt="telephone" /> +(84) 979-636-064
                                </div>
                                <div className="contact">
                                    <img src="/images/home/at-icon.svg" alt="at" /> ktstrung.lethien@gmail.com 
                                </div>
                            </div>
                            <div className="sliderControl">
                                <div className="text">
                                    <div className="highlight">
                                        DỰ ÁN TIẾP THEO
                                    </div>
                                    <div className="title">
                                        {sliders[(currentSliderIdx + 1 <= sliders.length - 1) ? currentSliderIdx + 1 : 0]?.name}
                                    </div>
                                </div>
                                <div className="control">
                                    <img src="/images/home/prev-arrow.svg" alt="prev" onClick={() => this.handleSlide('prev')}/>
                                    <img src="/images/home/next-arrow.svg" alt="next" onClick={() => this.handleSlide('next')}/>
                                </div>
                            </div>
                        </div>
                    <div className="bannerContent">
                        <div className="title">
                            <h1>
                                KHU DU LỊCH NGHỈ DƯỠNG <br/><strong>{sliders[currentSliderIdx]?.name}</strong>
                            </h1>
                            <div className="heading">
                                <div className="line"></div>
                                XEM CHI TIẾT
                            </div>
                        </div>
                    </div>
                </section>
                <section className="about">
                    <div className="textContent">
                        <div className="heading brown">
                            <div className="line"></div>
                            Giới thiệu
                        </div>
                        <h2>
                            Chào mừng tới T-architect Urban planning & Urban Design 
                        </h2>
                        <p>
                            Triếu lý cơ bản của tôi là tạo ra các dự án quy hoạch cũng như các công trình kiến trúc đẹp về mặt thẩm mỹ, lấy con người làm trung tâm bằng cách phát triển và bền vững các dự án sử dụng ý tưởng phong cách kiến trúc độc đáo.
                        </p>
                        <div className="exploreBlockBtn">
                            <div className="exploreBtn">Khám phá</div>
                        </div>
                    </div>
                    <div className="imageContent">
                        <img src="/images/home/about.png" alt="" />
                    </div>
                    <div className="imageContentMobile">
                        <img src="/images/home/placeholder.svg" alt="" className="bigImg"/>
                        <img src="/images/home/placeholder.svg" alt="" className="smallImg"/>
                    </div>
                    
                </section>
                <section className="numbers mobile" style={{backgroundImage: 'url("/images/home/slice-bg-mobile.png")'}}>
                    <div className="highlightItem">
                        <div className="number">
                            <div className="bigNumber">265</div>
                            <div className="smallNumber">265</div>
                        </div>
                        <div className="text">
                            SỐ LƯỢNG DỰ ÁN THAM GIA
                        </div>
                    </div>
                    <div className="highlightItem">
                        <div className="number">
                            <div className="bigNumber">05</div>
                            <div className="smallNumber">05</div>
                        </div>
                        <div className="text">
                            NĂM KINH NGHIỆM
                        </div>
                    </div>
                    <div className="highlightItem">
                        <div className="number">
                            <div className="bigNumber">60</div>
                            <div className="smallNumber">60</div>
                        </div>
                        <div className="text">
                            CÁC DỰ ÁN HOÀN THIỆN
                        </div>
                    </div>
                    <div className="highlightItem">
                        <div className="number">
                            <div className="bigNumber">15</div>
                            <div className="smallNumber">15</div>
                        </div>
                        <div className="text">
                            SỐ LƯỢNG ĐỐI TÁC
                        </div>
                    </div>
                </section>
                <section className="aspects">
                    <div className="infoBlock multiRow">
                        <div className="heading brown">
                            <div className="line"/> LĨNH VỰC NGHIÊN CỨU
                        </div>
                        <h2>
                            Các lĩnh vực liên quan đến Quy hoạch & Kiến trúc
                        </h2>
                    </div>
                    {aspectItems.map(item => 
                            <div className="infoBlock multiRow">
                                <div className={`icon ${activeAspect === item.key ? 'active' : ''}`} onMouseOver={() => this.handleActiveAspect(item.key)} onMouseOut={() => this.handleActiveAspect(null)}>
                                    <img src={`/images/home/aspect-${item.key}-${activeAspect === item.key ? 'white' : 'brown'}.svg`} alt="" />
                                </div>
                                <div className="title">{item.title}</div>
                                <div className="desc">{item.desc}</div>
                                <div className="heading black mobile">
                                    <div className="line half"/>
                                        Đọc tiếp
                                </div>
                            </div>
                        )}
                </section>
                <section className="projects">
                    <div className="heading brown upper pc">
                        <div className="line"/> <div>DỰ ÁN THAM GIA</div>
                    </div>
                    <div className="heading brown mobile">
                        <div className="line"/> <div>DỰ ÁN THAM GIA</div>
                    </div>
                    <h2>
                        CÁC DỰ ÁN MỚI NHẤT
                    </h2>
                    <div className="list-row pc">
                        <div className="list">
                            <div className="item">Tất cả</div>
                            <div className="item active">Quy hoạch</div>
                            <div className="item">Cảnh quan</div>
                            <div className="item">Khu du lịch nghỉ dưỡng</div>
                            <div className="item">Công viên</div>
                            <div className="item">Kiến trúc</div>
                            <div className="item">Diễn hoạ 3D</div>                                               
                        </div>
                    </div>
                    <Slider
                        {...sliderConfig}
                        className="mobileSlider"
                    >
                         <div className="card">
                            <div className="cardImage">
                                <div className="image" style={{backgroundImage: 'url("/images/home/project-sample.png")'}}/>
                                <div className="infoPopup">
                                    <div className="contentPopup">
                                        <div className="title">QUY HOẠCH</div>
                                        <div className="desc">PHÂN KHU A - KĐT PHỐ NỘI</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="cardImage">
                            <div className="image" style={{backgroundImage: 'url("/images/home/placeholder.svg")'}}/>
                            </div>
                        </div>
                        <div className="card">
                            <div className="cardImage">
                            <div className="image" style={{backgroundImage: 'url("/images/home/placeholder.svg")'}}/>
                            </div>
                        </div>
                        <div className="card">
                            <div className="cardImage">
                            <div className="image" style={{backgroundImage: 'url("/images/home/placeholder.svg")'}}/>
                            </div>
                        </div>
                        <div className="card">
                            <div className="cardImage">
                            <div className="image" style={{backgroundImage: 'url("/images/home/placeholder.svg")'}}/>
                            </div>
                        </div>
                        <div className="card">
                            <div className="cardImage">
                            <div className="image" style={{backgroundImage: 'url("/images/home/placeholder.svg")'}}/>
                            </div>
                        </div>
                    </Slider>
                    <div className="card-list pc">
                        <div className="card">
                            <div className="cardImage" style={{backgroundImage: 'url("/images/home/project-sample.png")'}}>
                                <div className="infoPopup">
                                    <div className="contentPopup">
                                        <div className="title">QUY HOẠCH</div>
                                        <div className="desc">PHÂN KHU A - KĐT PHỐ NỘI</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="cardImage" style={{backgroundImage: 'url("/images/home/placeholder.svg")'}}/>
                        </div>
                        <div className="card">
                            <div className="cardImage" style={{backgroundImage: 'url("/images/home/placeholder.svg")'}}/>
                        </div>
                        <div className="card">
                            <div className="cardImage" style={{backgroundImage: 'url("/images/home/placeholder.svg")'}}/>
                        </div>
                        <div className="card">
                            <div className="cardImage" style={{backgroundImage: 'url("/images/home/placeholder.svg")'}}/>
                        </div>
                        <div className="card">
                            <div className="cardImage" style={{backgroundImage: 'url("/images/home/placeholder.svg")'}}/>
                        </div>
                    </div>
                </section>
                <section className="explore-1">
                    <h2>
                        CẬP NHẬT CÁC TIN TỨC VỀ LĨNH VỰC XÂY DỰNG - BẤT ĐỘNG SẢN!
                    </h2>
                    <p>
                        Nơi cập nhật các thông tin sự kiện liên quan đến các vấn đề về lĩnh vực quy hoạch - kiến trúc - xây dựng và bất động sản
                    </p>
                    <div className="exploreBlockBtn white">
                        <div className="exploreBtn">Khám phá</div>
                    </div>
                </section>
                <section className="steps">
                    <div className="heading brown upper pc">
                        <div className="line"/> <div>STEP</div>
                    </div>

                    <div className="heading brown mobile">
                        <div className="line"/> <div>STEP</div>
                    </div>

                    <h2>
                        CÁC BƯỚC THIẾT KẾ 
                    </h2>
                    <div className="infoBlockList stepList">
                        {stepItems.map((item, idx) => 
                            <div className="infoBlock">
                                <div className="backStageNumber">0{idx + 1}</div>
                                <div className={`icon center ${activeStep === item.key ? 'active' : ''}`} onMouseOver={() => this.handleActiveStep(item.key)} onMouseOut={() => this.handleActiveStep(null)}>
                                    <img src={`/images/home/${item.key}-${activeStep === item.key ? 'white' : 'brown'}.svg`} alt="" />
                                </div>
                                <div className="title">{item.title}</div>
                                <div className="desc">{item.desc}</div>
                            </div>
                        )}
                    </div>
                </section>
                <section className="explore-2 pc" style={{backgroundImage: "url('/images/home/explore.png')"}}>
                    <div className="layer"/>
                    <div className="sectionContent">
                        <p>KHÁM PHÁ CÁC DỰ ÁN</p>
                        <h2>
                            CÁC DỰ ÁN THỰC HIỆN ĐÃ ĐƯỢC PHÊ DUYỆT
                        </h2>
                        <div className="exploreBlockBtn white">
                            <div className="exploreBtn">CHI TIẾT</div>
                        </div>
                    </div>
                </section>
                <section className="numbers explore-1 pc">
                    <div className="highlightItem">
                        <div className="number">
                            <div className="bigNumber">265</div>
                            <div className="smallNumber">265</div>
                        </div>
                        <div className="text">
                            SỐ LƯỢNG DỰ ÁN THAM GIA
                        </div>
                    </div>
                    <div className="highlightItem">
                        <div className="number">
                            <div className="bigNumber">05</div>
                            <div className="smallNumber">05</div>
                        </div>
                        <div className="text">
                            NĂM KINH NGHIỆM
                        </div>
                    </div>
                    <div className="highlightItem">
                        <div className="number">
                            <div className="bigNumber">60</div>
                            <div className="smallNumber">60</div>
                        </div>
                        <div className="text">
                            CÁC DỰ ÁN HOÀN THIỆN
                        </div>
                    </div>
                    <div className="highlightItem">
                        <div className="number">
                            <div className="bigNumber">15</div>
                            <div className="smallNumber">15</div>
                        </div>
                        <div className="text">
                            SỐ LƯỢNG ĐỐI TÁC
                        </div>
                    </div>
                </section>
                <section className="blog">
                    <div className="heading brown">
                        <div className="line"/>
                            BLOG
                    </div>
                    <div className="title">
                        <h2>Thông tin mới nhất</h2>
                        <div className="heading black pc">
                            <div className="line"/>
                                Xem tất cả
                        </div>
                        <div className="heading black mobile">
                            <div className="line half"/>
                                Xem tất cả
                        </div>
                    </div>
                    <div className="card-list">
                        <div className="card">
                            <div className="cardImage" style={{backgroundImage: 'url("/images/home/blog-placeholder.svg")'}}>
                                <div className="infoPopup tag">
                                    <div className="contentPopup">
                                        <div className="shortText">QUY HOẠCH</div>
                                    </div>
                                </div>
                            </div>
                            <div className="cardContent">
                                <div className="datetime">
                                    17/06/2021, 16:00 - QUY HOẠCH
                                </div>
                                <div className="cardTitle">
                                    Nordic style, interior style for simple life
                                </div>
                                <div className="heading black">
                                    <div className="line half"/>
                                    ĐỌC TIẾP
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="cardImage" style={{backgroundImage: 'url("/images/home/blog-placeholder.svg")'}}>
                                <div className="infoPopup tag">
                                    <div className="contentPopup">
                                        <div className="shortText">Kiến trúc</div>
                                    </div>
                                </div>
                            </div>
                            <div className="cardContent">
                                <div className="datetime">
                                    17/06/2021, 16:00 - QUY HOẠCH
                                </div>
                                <div className="cardTitle">
                                    Nordic style, interior style for simple life
                                </div>
                                <div className="heading black">
                                    <div className="line half"/>
                                    ĐỌC TIẾP
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="cardImage" style={{backgroundImage: 'url("/images/home/blog-placeholder.svg")'}}>
                                <div className="infoPopup tag">
                                    <div className="contentPopup">
                                        <div className="shortText">Cảnh quan</div>
                                    </div>
                                </div>
                            </div>
                            <div className="cardContent">
                                <div className="datetime">
                                    17/06/2021, 16:00 - CẢNH QUAN
                                </div>
                                <div className="cardTitle">
                                    Nordic style, interior style for simple life
                                </div>
                                <div className="heading black">
                                    <div className="line half"/>
                                    ĐỌC TIẾP
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default HomePage