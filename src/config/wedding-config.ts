const uniqueIdentifier = "JWK-WEDDING-TEMPLATE-V1";

// 갤러리 레이아웃 타입 정의
type GalleryLayout = "scroll" | "grid";
type GalleryPosition = "middle" | "bottom";

interface GalleryConfig {
    layout: GalleryLayout;
    position: GalleryPosition;
    images: string[];
}

export const weddingConfig = {
    // 메타 정보
    meta: {
        title: "김동훈 ❤️ 홍승민의 결혼식에 초대합니다",
        description: "결혼식 초대장",
        ogImage: "/images/thumbnail.jpg",
        noIndex: true,
        _jwk_watermark_id: uniqueIdentifier,
    },

    // 메인 화면
    main: {
        title: "Wedding Invitation",
        image: "/images/gallery/thumbnail.png",
        date: "2025년 11월 16일 일요일 12시 30분",
        venue: "아벤티움",
        effects: {
            zoomIn: {
                enabled: true,
                scaleCoef: 0.0005,
            },
            parallax: {
                enabled: true,
                scaleCoef: 0.3,
            },
        },
    },

    // 소개글
    intro: {
        title: "",
        text: "서로 다르게 살아온 두 사람이\n같은 곳을 바라보며 살아가고자 합니다.\n귀한 걸음 하시어 저희의 새로운 시작을\n축복해주시면 더없는 기쁨이겠습니다.",
    },

    // 결혼식 일정
    date: {
        year: 2025,
        month: 11,
        day: 16,
        hour: 12,
        minute: 30,
        displayDate: "2025.11.16 SUN PM 12:30",
    },

    // 장소 정보
    venue: {
        name: "아벤티움",
        address: "서울특별시 중구 청파로 464 3층\n아벤티움",
        tel: "02-313-2480",
        naverMapId: "채플 웨딩홀 아벤티움", // 네이버 지도 검색용 장소명
        coordinates: {
            latitude: 37.560636,
            longitude: 126.968352,
        },
        placeId: "123456789", // 네이버 지도 장소 ID
        mapZoom: "17", // 지도 줌 레벨
        mapNaverCoordinates: "14141300,4507203,15,0,0,0,dh", // 네이버 지도 길찾기 URL용 좌표 파라미터 (구 형식)
        transportation: {
            subway: "2, 5호선 충정로역 4번 출구에서 도보 5분\n1, 4호선 서울역 3번 출구에서 도보 15분",
        },
        parking:
            "[별관 주차장] 서소문 공원 (중구 칠패로 5)\n[본관 주차장] 브라운스톤서울 (중구 청파로 464)\n* 서소문 공원 주차장을 이용하시면 더욱 여유롭게 이용 가능합니다.",
        // 신랑측 배차 안내
        groomShuttle: {
            location: "신랑측 배차 출발지",
            departureTime: "오전 10시 30분 출발",
            contact: {
                name: "담당자명",
                tel: "010-1234-5678",
            },
        },
        // 신부측 배차 안내
    },

    // 갤러리
    gallery: {
        layout: "grid" as GalleryLayout, // "scroll" 또는 "grid" 선택
        position: "bottom" as GalleryPosition, // "middle" (현재 위치) 또는 "bottom" (맨 하단) 선택
        images: [
            "/images/gallery/image1.jpg",
            "/images/gallery/image2.jpg",
            "/images/gallery/image3.jpg",
            "/images/gallery/image4.jpg",
            "/images/gallery/image5.jpg",
            "/images/gallery/image6.jpg",
            "/images/gallery/image7.jpg",
            "/images/gallery/image8.jpg",
            "/images/gallery/image9.jpg",
            "/images/gallery/image10.jpg",
            "/images/gallery/image11.jpg",
            "/images/gallery/image12.jpg",
            "/images/gallery/image13.jpg",
            "/images/gallery/image14.jpg",
            "/images/gallery/image14.jpg",
        ],
    } as GalleryConfig,

    // 초대의 말씀
    invitation: {
        message:
            "서로 다르게 살아온 두 사람이 같은 곳을 바라보며 살아가고자 합니다.\n귀한 걸음 하시어 저희의 새로운 시작을 축복해주시면 더없는 기쁨이겠습니다.",
        groom: {
            name: "김동훈",
            label: "장남",
            father: "김정수",
            mother: "백우정",
        },
        bride: {
            name: "홍승민",
            label: "차녀",
            father: "홍찬선",
            mother: "황경숙",
        },
    },

    // 계좌번호
    account: {
        enableShareUrlButton: false,
        groom: {
            bank: "우리은행",
            number: "1002-266-102280",
            holder: "김동훈",
        },
        bride: {
            bank: "우리은행",
            number: "1002-956-231799",
            holder: "홍승민",
        },
        groomFather: {
            bank: "국민은행",
            number: "501602-01-318403",
            holder: "백우정",
        },
        groomMother: {
            bank: "국민은행",
            number: "501602-01-318403",
            holder: "백우정",
        },
        brideFather: {
            bank: "국민은행",
            number: "870-24-0100-211",
            holder: "홍찬선",
        },
        brideMother: {
            bank: "국민은행",
            number: "062002-04-230999",
            holder: "황경숙",
        },
    },

    // RSVP 설정
    rsvp: {
        enabled: false, // RSVP 섹션 표시 여부
        showMealOption: false, // 식사 여부 입력 옵션 표시 여부
    },

    // 슬랙 알림 설정
    slack: {
        webhookUrl: process.env.NEXT_PUBLIC_SLACK_WEBHOOK_URL || "",
        channel: "#wedding-response",
        compactMessage: true, // 슬랙 메시지를 간결하게 표시
    },

    // Color swatcher
    colorSwatcher: {
        color1: "#f0f0f0", // 배경색
        color2: "#f0f0f0", // 배경색
        color3: "#f0f0f0", // 배경색
        color4: "#f0f0f0", // 배경색
        color5: "#f0f0f0", // 배경색
        color6: "#f0f0f0", // 배경색
        color7: "#f0f0f0", // 배경색
        color8: "#f0f0f0", // 배경색
        color9: "#f0f0f0", // 배경색
    },
};
