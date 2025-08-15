import { FontConfigPresets } from "./FontConfigPresets";
import {
    EtcConfig,
    FontConfig,
    MarginConfig,
    StyledTextProps,
} from "../types/wedding";
import { colorSwatcher } from "./ColorSwatcher";

const uniqueIdentifier = "JWK-WEDDING-TEMPLATE-V1";

// 갤러리 레이아웃 타입 정의
type GalleryLayout = "scroll" | "grid";
type GalleryPosition = "middle" | "bottom";

interface GalleryConfig {
    title: StyledTextProps;
    layout: GalleryLayout;
    position: GalleryPosition;
    images: string[];
}

export const weddingConfig = {
    // 메타 정보

    // key:`${colorName}-${fontFamily}-${fontStyle}-${fontSizeKey}`;

    meta: {
        title: "김동훈 ❤️ 홍승민의 결혼식에 초대합니다",
        description: "결혼식 초대장",
        ogImage: "/images/background.jpg",
        noIndex: true,
        _jwk_watermark_id: uniqueIdentifier,
    },

    // 메인 화면
    // TODO margin Config
    main: {
        header: {
            text: "Wedding Invitation",
            fontConfig: {
                color: colorSwatcher.white,
                fontFamily: "Baskervville",
                fontSize: 1.5,
                fontWeight: 500,
            } as FontConfig, //FontConfigPresets["white-Baskerville-normal-1_500"],
            marginConfig: {
                top: "1rem",
                bottom: "0rem",
            } as MarginConfig,
            etcConfig: {
                letterSpacing: "2px",
                lineHeight: 1.2,
                textShadow: "0px 0px 20px black",
            },
        } as StyledTextProps,

        title: {
            text: "Donghoon & Seungmin",
            fontConfig: {
                color: colorSwatcher.white,
                fontFamily: "Baskervville-italic",
                fontStyle: "normal",
                fontSize: 3.0,
                fontWeight: 400,
            } as FontConfig, //FontConfigPresets["white-Baskerville-normal-1_500"],
            marginConfig: {
                bottom: "1rem",
            } as MarginConfig,
            etcConfig: {
                letterSpacing: "2px",
                lineHeight: 1.2,
                textShadow: "0px 0px 20px black",
                sticky: true,
            },
        } as StyledTextProps,

        image: "/images/background.jpg",
        date: {
            text: "2025년 11월 16일 일요일 12시 30분",
            fontConfig: FontConfigPresets["white-Ridi-normal-1_250"],
            marginConfig: {
                bottom: "0.5rem",
            } as MarginConfig,
        } as StyledTextProps,

        venue: {
            text: "아벤티움",
            fontConfig: FontConfigPresets["white-Ridi-normal-1_250"],
        } as StyledTextProps,

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

    // 초대의 말씀
    invitation: {
        sectionBackgroundColor: colorSwatcher.white,
        message: {
            text: "2222서로 다르게 살아온 두 사람이\n 같은 곳을 바라보며 살아가고자 합니다.\n귀한 걸음 하시어 저희의 새로운 시작을 \n축복해주시면 더없는 기쁨이겠습니다.",
            fontConfig: FontConfigPresets["textColor-Ridi-normal-1_125"],
            marginConfig: {
                top: "2rem",
                bottom: "2rem",
                left: "auto",
                right: "auto",
            } as MarginConfig,
            etcConfig: {
                whiteSpace: "pre-line",
                lineHeight: 1.8, // 행간
                maxWidth: 36, // 행 최대 너비
            } as EtcConfig,
        } as StyledTextProps,

        groom: {
            name: {
                text: "김동훈",
                fontConfig: FontConfigPresets["black-Ridi-normal-1_500"],
            } as StyledTextProps,

            label: {
                text: "장남",
                fontConfig:
                    FontConfigPresets["textColorHighlight-Ridi-normal-1_250"],
            } as StyledTextProps,

            father: {
                text: "김정수",
                fontConfig:
                    FontConfigPresets["textColorHighlight-Ridi-normal-1_250"],

                marginConfig: {
                    bottom: "0.25rem",
                },
            } as StyledTextProps,

            mother: {
                text: "백우정",
                fontConfig:
                    FontConfigPresets["textColorHighlight-Ridi-normal-1_250"],
            } as StyledTextProps,
        },

        bride: {
            name: {
                text: "홍승민",
                fontConfig: FontConfigPresets["black-Ridi-normal-1_500"],
            } as StyledTextProps,

            label: {
                text: "차녀",
                fontConfig:
                    FontConfigPresets["textColorHighlight-Ridi-normal-1_250"],
            } as StyledTextProps,

            father: {
                text: "홍찬선",
                fontConfig:
                    FontConfigPresets["textColorHighlight-Ridi-normal-1_250"],
            } as StyledTextProps,

            mother: {
                text: "황경숙",
                fontConfig:
                    FontConfigPresets["textColorHighlight-Ridi-normal-1_250"],
            } as StyledTextProps,
        },
    },

    // 결혼식 일정
    date: {
        sectionBackgroundColor: colorSwatcher.white,
        title: {
            text: "",
            fontConfig: FontConfigPresets["black-Ridi-normal-1_500"],
            marginConfig: {
                bottom: "2rem",
            },
        } as StyledTextProps,
        year: 2025,
        month: 11,
        day: 16,
        hour: 12,
        minute: 30,
        displayDate: {
            text: "2025.11.16 SUN PM 12:30",
            fontConfig: FontConfigPresets["black-Ridi-normal-1_250"],
        } as StyledTextProps,

        countDownLabel: {
            text: "동훈과 승민의 결혼식이 {daysLeft}일 남았습니다.",
            fontConfig: FontConfigPresets["textColor-Ridi-normal-1_125"],
        } as StyledTextProps,

        // orders
        componentOrder: ["calendar", "countDownLabel", "countDown"],
    },

    // 장소 정보
    venue: {
        sectionBackgroundColor: colorSwatcher.white,

        title: {
            text: "장소",
            fontConfig: FontConfigPresets["black-Ridi-normal-1_500"],
            marginConfig: {
                bottom: "2rem",
            },
        } as StyledTextProps,

        name: {
            text: "아벤티움",
            fontConfig: FontConfigPresets["textColor-Ridi-normal-1_250"],
            marginConfig: {
                bottom: "0.5rem",
            } as MarginConfig,
            etcConfig: {
                fontWeight: 500,
            },
        } as StyledTextProps,

        address: {
            text: "서울특별시 중구 청파로 464 3층\n02-313-2480",
            fontConfig:
                FontConfigPresets["textColorHighlightDimmed-Ridi-normal-1_125"],
            marginConfig: {
                bottom: "0.5rem",
            } as MarginConfig,
        } as StyledTextProps,

        tel: {
            text: "",
            fontConfig: FontConfigPresets["empty"],
            etcConfig: {
                textDecoration: "none",
            } as EtcConfig,
        } as StyledTextProps,

        naverMapId: "채플 웨딩홀 아벤티움",

        coordinates: {
            latitude: 37.560636,
            longitude: 126.968352,
        },
        placeId: "37117082", // 네이버 지도 장소 ID
        mapZoom: "17", // 지도 줌 레벨
        mapNaverCoordinates: "14141300,4507203,15,0,0,0,dh", // 네이버 지도 길찾기 URL용 좌표 파라미터 (구 형식)
        transportation: {
            title: {
                text: "대중교통 안내",
                fontConfig: FontConfigPresets["black-Ridi-normal-1_250"],
            },

            subway: {
                title: {
                    text: "지하철",
                    fontConfig: FontConfigPresets["black-Ridi-normal-1_250"],
                } as StyledTextProps,

                body: {
                    text: "2, 5호선 충정로역 4번 출구에서 도보 5분\n1, 4호선 서울역 3번 출구에서 도보 15분",
                    fontConfig: FontConfigPresets["black-Ridi-normal-1_000"],
                } as StyledTextProps,
            },
        },

        parking: {
            title: {
                text: "주차 안내",
                fontConfig: FontConfigPresets["black-Ridi-normal-1_000"],
            } as StyledTextProps,

            body: {
                text: "[별관 주차장] 서소문 공원 (중구 칠패로 5)\n[본관 주차장] 브라운스톤서울 (중구 청파로 464)",
                fontConfig: FontConfigPresets["black-Ridi-normal-1_000"],
                etcConfig: {
                    whiteSpace: "pre-line",
                },
            } as StyledTextProps,

            remarks: {
                text: "* 별관 주차장을 이용하시면 더욱 여유롭게 이용 가능합니다.",
                fontConfig:
                    FontConfigPresets[
                        "textColorHighlightDimmed-Ridi-normal-0_875"
                    ],
            } as StyledTextProps,
        },

        // 신랑측 배차 안내
        groomShuttle: {
            title: {
                text: "신랑측 배차 안내",
                fontConfig: FontConfigPresets["black-Ridi-normal-1_250"],
            } as StyledTextProps,

            location: {
                header: {
                    text: "탑승 장소",
                    fontConfig: FontConfigPresets["black-Ridi-normal-0_875"],
                } as StyledTextProps,

                content: {
                    text: "신랑측 배차 출발지",
                    fontConfig: FontConfigPresets["black-Ridi-normal-0_875"],
                } as StyledTextProps,
            },

            departureTime: {
                header: {
                    text: "탑승 시간",
                    fontConfig: FontConfigPresets["black-Ridi-normal-0_875"],
                } as StyledTextProps,

                content: {
                    text: "오전 10시 30분",
                    fontConfig: FontConfigPresets["black-Ridi-normal-0_875"],
                } as StyledTextProps,
            },

            contact: {
                header: {
                    text: "인솔자",
                    fontConfig: FontConfigPresets["black-Ridi-normal-0_875"],
                } as StyledTextProps,

                content: {
                    text: "아무개(010-1234-5678)",
                    fontConfig: FontConfigPresets["black-Ridi-normal-0_875"],
                } as StyledTextProps,

                number: "010-1234-5678",
            },
        },
        // 신부측 배차 안내
    },

    // 갤러리
    gallery: {
        title: {
            text: "갤러리",
            fontConfig: FontConfigPresets["black-Ridi-normal-1_500"],
            marginConfig: {
                bottom: "2rem",
            },
        } as StyledTextProps,

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

    // 계좌번호
    account: {
        sectionBackgroundColor: colorSwatcher.white,

        enableShareUrlButton: false,
        title: {
            text: "마음 전하실 곳",
            fontConfig: FontConfigPresets["black-Ridi-normal-1_250"],
            marginConfig: {
                bottom: "2rem",
            },
        } as StyledTextProps,

        refusalWreath: {
            text: "저희는 화환 대신 마음을 전해주시면 감사하겠습니다.",
            fontConfig: FontConfigPresets["black-Ridi-normal-1_250"],
            marginConfig: {
                top: "2rem",
            },
        } as StyledTextProps,

        groom: {
            bank: {
                text: "우리은행",
                fontConfig: FontConfigPresets["black-Ridi-normal-1_250"],
            } as StyledTextProps,

            number: {
                text: "1002-266-102280",
                fontConfig: FontConfigPresets["black-Ridi-normal-1_250"],
            } as StyledTextProps,

            holder: {
                text: "김동훈",
                fontConfig: FontConfigPresets["black-Ridi-normal-1_250"],
            } as StyledTextProps,
        },

        bride: {
            bank: {
                text: "우리은행",
                fontConfig: FontConfigPresets["black-Ridi-normal-1_250"],
            } as StyledTextProps,

            number: {
                text: "1002-956-231799",
                fontConfig: FontConfigPresets["black-Ridi-normal-1_250"],
            } as StyledTextProps,

            holder: {
                text: "홍승민",
                fontConfig: FontConfigPresets["black-Ridi-normal-1_250"],
            } as StyledTextProps,
        },

        groomFather: {
            bank: {
                text: "국민은행",
                fontConfig: FontConfigPresets["black-Ridi-normal-1_250"],
            } as StyledTextProps,
            number: {
                text: "501602-01-318403",
                fontConfig: FontConfigPresets["black-Ridi-normal-1_250"],
            } as StyledTextProps,

            holder: {
                text: "백우정",
                fontConfig: FontConfigPresets["black-Ridi-normal-1_250"],
            } as StyledTextProps,
        },

        groomMother: {
            bank: {
                text: "국민은행",
                fontConfig: FontConfigPresets["black-Ridi-normal-1_250"],
            } as StyledTextProps,

            number: {
                text: "501602-01-318403",
                fontConfig: FontConfigPresets["black-Ridi-normal-1_250"],
            } as StyledTextProps,

            holder: {
                text: "백우정",
                fontConfig: FontConfigPresets["black-Ridi-normal-1_250"],
            } as StyledTextProps,
        },

        brideFather: {
            bank: {
                text: "국민은행",
                fontConfig: FontConfigPresets["black-Ridi-normal-1_250"],
            } as StyledTextProps,

            number: {
                text: "870-24-0100-211",
                fontConfig: FontConfigPresets["black-Ridi-normal-1_250"],
            } as StyledTextProps,

            holder: {
                text: "홍찬선",
                fontConfig: FontConfigPresets["black-Ridi-normal-1_250"],
            } as StyledTextProps,
        },

        brideMother: {
            bank: {
                text: "국민은행",
                fontConfig: FontConfigPresets["black-Ridi-normal-1_250"],
            } as StyledTextProps,
            number: {
                text: "062002-04-230999",
                fontConfig: FontConfigPresets["black-Ridi-normal-1_250"],
            } as StyledTextProps,

            holder: {
                text: "황경숙",
                fontConfig: FontConfigPresets["black-Ridi-normal-1_250"],
            } as StyledTextProps,
        },
    },

    // RSVP 설정
    rsvp: {
        enabled: false, // RSVP 섹션 표시 여부
        showMealOption: false, // 식사 여부 입력 옵션 표시 여부
    },

    // 소개글
    intro: {
        title: {
            text: "",
            fontConfig: FontConfigPresets["empty"],
        } as StyledTextProps,

        text: {
            text: "1111서로 다르게 살아온 두 사람이\n같은 곳을 바라보며 살아가고자 합니다.\n귀한 걸음 하시어 저희의 새로운 시작을\n축복해주시면 더없는 기쁨이겠습니다.",
            fontConfig: FontConfigPresets["black-Ridi-normal-1_500"],
        } as StyledTextProps,
    },

    // 슬랙 알림 설정
    slack: {
        webhookUrl: process.env.NEXT_PUBLIC_SLACK_WEBHOOK_URL || "",
        channel: "#wedding-response",
        compactMessage: true, // 슬랙 메시지를 간결하게 표시
    },
    // "main", "invitation", "calendar", "venue", "gallery", "account", "rsvp"
    componentOrder: [
        {
            name: "main",
            show: true,
        },
        {
            name: "invitation",
            show: true,
        },
        {
            name: "date",
            show: true,
        },
        {
            name: "venue",
            show: true,
        },
        {
            name: "gallery",
            show: true,
        },
        {
            name: "account",
            show: true,
        },
        {
            name: "rsvp",
            show: false,
        },
    ],
};
