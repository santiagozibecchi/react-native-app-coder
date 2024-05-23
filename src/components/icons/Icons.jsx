import { Ionicons, MaterialIcons, AntDesign } from "@expo/vector-icons"


export const Home = ({ size, color }) => {

    return (
        <AntDesign name="home" size={size} color={color} />
    )
}

export const Place = ({ size, color }) => {

    return (
        <MaterialIcons name="place" size={size} color={color} />
    )
}

export const Profile = ({ size, color }) => {

    return (
        <Ionicons name="person-circle-outline" size={size} color={color} />
    )
}

export const Favourite = ({ size, color, outline = false, style }) => {

    if (outline) {
        return <Ionicons name="star" size={size} color={color} style={{...style}} />
    }

    return (
        <Ionicons name="star-outline" size={size} color={color} />
    )
}

export const Warn = ({ size, color }) => {

    return (
        <Ionicons name="alert-circle-outline" size={size} color={color} />
    )
}

export const Like = ({ size, color }) => {

    return (
        <Ionicons name="heart" size={size} color={color} />
    )
}


