import { View, Text, FlatList } from 'react-native'
import { CategoryItem } from './CategoryItem';
import { colors } from '../../constants/colors';

const expandCategoryData = (categoty) => {
    const categoryKeyToExpandData = {
        "cafes": { ref: "cafes", title: "Cafés", img: "https://media.istockphoto.com/id/1351860620/es/foto/grupo-de-personas-brindando-caf%C3%A9-con-leche-en-la-azotea-del-bar-de-caf%C3%A9-amigos-hablando-y.jpg?s=1024x1024&w=is&k=20&c=DPobFeHYBaHqAbgvv_5_yU-_feVmS3QXa4cp0wr2MAU=" },
        "wine-bars": { ref: "wine-bars", title: "Bares de vinos", img: "https://media.istockphoto.com/id/636002054/es/foto/damas-es-bar-con-vino-tinto.jpg?s=1024x1024&w=is&k=20&c=5jATw1_EIrtSQr74Cfm2_4KWDQyM6ZQEJ_XL0qmz6wU=" },
        "restaurants": { ref: "restaurants", title: "Restaurantes", img: "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        "ice-cream-parlors": { ref: "ice-cream-parlors", title: "Heladerias", img: "https://media.istockphoto.com/id/915009106/es/foto/trabajadora-sirviendo-un-helado-a-un-cliente-irreconocible-en-la-helader%C3%ADa.jpg?s=1024x1024&w=is&k=20&c=8zvH-zAGR_NOA6LGyZ0mORD6gqBfHZL8UIszS2aMHjo=" },
        "golf-courses": { ref: "golf-courses", title: "Prácticas de golf", img: "https://media.istockphoto.com/id/1250079980/es/foto/tr%C3%ADo-juega-al-golf-en-un-hermoso-verde-esc%C3%A9nico-hombre-y-dos-mujeres-deportivas.jpg?s=1024x1024&w=is&k=20&c=ENX_Wp4V9tw6VGXBuGZMqCBZBhx_ztA96_nwlA9a7Po=" },
        "ski-resorts": { ref: "ski-resorts", title: "Estaciones de esquí", img: "https://media.istockphoto.com/id/636579530/es/foto/pareja-esquiando-en-un-d%C3%ADa-soleado-en-polvo.jpg?s=1024x1024&w=is&k=20&c=CLmZt-LWuR7biKJCOEPfGANwRhKmSRRzFc_QvfTat7w=" },
        "museums": { ref: "museums", title: "Museos", img: "https://media.istockphoto.com/id/538483378/es/foto/de-arriba-vista-de-los-visitantes-de-interior-del-museo-agitado.jpg?s=1024x1024&w=is&k=20&c=SEkC400X0r6tQ9oHtSTO7UboF_fBeem2h8xTtyOrulM=" },
        "bars": { ref: "bars", title: "Bar", img: "https://images.unsplash.com/photo-1575444758702-4a6b9222336e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        "cinemas": { ref: "cinemas", title: "Cines", img: "https://media.istockphoto.com/id/1799054435/es/foto/padre-e-hija-negros-felices-disfrutando-de-la-proyecci%C3%B3n-de-la-pel%C3%ADcula-en-el-teatro.jpg?s=1024x1024&w=is&k=20&c=mtgMFtKHUyfJp8SXhIGoV2DjSlg9P7KJQg-omP93Ac0=" },
        "nightclubs": { ref: "nightclubs", title: "Discotecas", img: "https://media.istockphoto.com/id/518210552/es/foto/mujeres-j%C3%B3venes-disfruta-de-baile-con-sus-amigos-en-el-club.jpg?s=1024x1024&w=is&k=20&c=ncBVhuLheZD0GfWmaMbe67XXaOBFV8YG55nIIj-Azx4=" },
        "casinos": { ref: "casinos", title: "Casinos", img: "https://media.istockphoto.com/id/1286611225/es/foto/sabes-jugar.jpg?s=1024x1024&w=is&k=20&c=UlAIJGj6SRzFXJvE56VEr41ph6QPubrwUrhZjkUvwXA=" },
        "libraries": { ref: "libraries", title: "Bibliotecas", img: "https://media.istockphoto.com/id/1458679553/es/foto/grupo-de-estudiantes-de-secundaria-usando-computadora-port%C3%A1til-en-la-biblioteca.jpg?s=1024x1024&w=is&k=20&c=AQK-lHfS8gdhY5lpdlmdIYPzmSve9Mf4SmaEOtUu1Y8=" },
        "theaters": { ref: "theaters", title: "Teatros", img: "https://media.istockphoto.com/id/1349232548/es/foto/tres-actrices-con-trajes-de-%C3%A9poca-en-el-escenario-del-teatro.jpg?s=1024x1024&w=is&k=20&c=ucNWGURFZBoeX-4p5n6iD0bgX9IZbkK9bt5pjNvw-XI=" },
        "monuments": { ref: "monuments", title: "Monumentos", img: "https://media.istockphoto.com/id/1090430666/es/foto/plaza-de-mayo-y-casa-rosada.jpg?s=1024x1024&w=is&k=20&c=gxNK5yGVv_Edz1jNmmLUo2fMdfABK_uNxYn3IkGMwfo=" },
        "squares": { ref: "squares", title: "Plazas", img: "https://s7e6w6d2.rocketcdn.me/wp-content/uploads/2022/02/Plaza-Naciones-Unidas-Buenos-Aires-1.webp" },
    }

    if (!categoryKeyToExpandData[categoty]) {
        throw new Error("Algo salio mal")
    }

    return categoryKeyToExpandData[categoty];
}

export const CategoryGrid = ({ categories, title }) => {

    // TODO: navigation.navigate(PLACE_COMPONENT.list_category_screen)}

    return (
        <View style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            marginVertical: 10, // Espacio vertical entre elementos
        }}>
            {
                title && (
                    <Text
                        style={{
                            fontSize: 24,
                            fontWeight: "300",
                            marginBottom: 10,
                            color: colors.text,
                        }}
                    >
                        {title}
                    </Text>
                )
            }

            <FlatList
                numColumns={2}
                data={categories}
                renderItem={({ item }) => (
                    <CategoryItem category={expandCategoryData(item)} width={140} height={140} />
                )}
                keyExtractor={(item) => item}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    alignItems: 'center', // Centra los elementos horizontalmente
                }}
            />
        </View>
    )
}