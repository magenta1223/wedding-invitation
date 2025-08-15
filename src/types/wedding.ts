export interface StyledTextProps {
    text: string;
    fontConfig: FontConfig;
    layoutConfig?: LayoutConfig;
    marginConfig?: MarginConfig;
    paddingConfig?: PaddingConfig;
    etcConfig?: EtcConfig;
}

export interface FontConfig {
    color: string;
    fontFamily: string;
    fontSize: number;
    fontStyle: string;
    fontWeight?: number;
}

export interface LayoutConfig {
    display?: string;
    flexDirection?: string;
    alignItems?: string;
}

export interface MarginConfig {
    horizontal: number | string;
    vertical: number | string;
    top: number | string;
    bottom: number | string;
    left: number | string;
    right: number | string;
}

export interface PaddingConfig {
    horizontal: number;
    vertical: number;
    top: number;
    bottom: number;
    left: number;
    right: number;
}

export interface EtcConfig {
    whiteSpace?: string;
    lineHeight?: number | string;
    maxWidth?: number | string;
    display?: string;
    alignItems?: string;
    gap?: number | string;
    minHeight?: number | string;
    fontWeight?: number;
    letterSpacing?: string;
    textDecoration?: string;
    textShadow?: string; //
    sticky?: boolean;
}

export interface AccountInfo {
    bank: StyledTextProps;
    number: StyledTextProps;
    holder: StyledTextProps;
}

export interface WeddingAccountConfig {
    groom: AccountInfo;
    bride: AccountInfo;
    groomFather: AccountInfo;
    groomMother: AccountInfo;
    brideFather: AccountInfo;
    brideMother: AccountInfo;
}

export interface ShuttleContact {
    name: string;
    tel: string;
}

export interface ShuttleInfo {
    location: string;
    departureTime: string;
    contact: ShuttleContact;
}

export interface Venue {
    name: string;
    address: string;
    tel: string;
    naverMapId: string;
    coordinates: {
        latitude: number;
        longitude: number;
    };
    placeId: string;
    mapZoom: string;
    mapNaverCoordinates?: string;
    transportation: {
        subway: string;
        bus: string;
    };
    parking: string;
    groomShuttle?: ShuttleInfo;
    brideShuttle?: ShuttleInfo;
}
