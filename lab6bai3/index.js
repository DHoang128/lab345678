import 'react-native-gesture-handler';
import React from "react";
import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native';
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Screen1 from "./screen1";
import Screen2 from "./screen2";
import Screen3 from "./screen3";
import Screen4 from "./screen4";
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { MaterialIcons } from '@expo/vector-icons'; // Thêm thư viện icon  

const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props) => {
    return (
        <DrawerContentScrollView {...props}>
            <ImageBackground
                source={{ uri: 'https://img5.thuthuatphanmem.vn/uploads/2021/11/26/hinh-anh-doremon-khoc-de-thuong-dep_033158808.jpg' }} // Thay thế bằng URL hình nền của bạn   
                style={styles.userInfoSection}
            >
                <View style={styles.profileContainer}>
                    <Image
                        style={styles.profileImage}
                        source={{ uri: 'https://th.bing.com/th/id/R.d930651664e60ab0a9873be8e2aa3e81?rik=EBlnjyuPTTRdNg&riu=http%3a%2f%2fwww.hdwallpapersfreedownload.com%2fuploads%2flarge%2fcartoons%2fdoraemon-full.jpg&ehk=bMkOVg25D1cJaXdXQdJOjvkUi5JVCeq9jQJw6sIeDKU%3d&risl=&pid=ImgRaw&r=0' }} // URL hình ảnh của bạn  
                    />
                    <Text style={styles.userName}>Duong Danh Hoang</Text>
                    <Text style={styles.userEmail}>hoangddpd10772@gmail.com</Text>
                </View>
            </ImageBackground>
            <View style={styles.drawerItemListContainer}>
                <DrawerItemList {...props} />
            </View>
            <DrawerItem
                label="Help"
                icon={({ color, size }) => (
                    <MaterialIcons name="help-outline" color={color} size={size} />
                )}
                onPress={() => alert('Help')}
            />

            {/* Dòng chữ hiển thị phiên bản ứng dụng */}
            <Text style={styles.appVersion}>Phiên bản ứng dụng: 2.6.0</Text>
        </DrawerContentScrollView>
    );
};

const lab6bai3 = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator
                initialRouteName="Home"
                drawerContent={props => <CustomDrawerContent {...props} />}
            >
                <Drawer.Screen
                    name="Home"
                    component={Screen1}
                    options={{
                        drawerIcon: ({ size, color }) => (
                            <MaterialIcons name="home" color={color} size={size} />
                        ),
                    }}
                />
                <Drawer.Screen
                    name="Article"
                    component={Screen2}
                    options={{
                        drawerIcon: ({ size, color }) => (
                            <MaterialIcons name="article" color={color} size={size} />
                        ),
                    }}
                />
                <Drawer.Screen
                    name="Chat"
                    component={Screen3}
                    options={{
                        drawerIcon: ({ size, color }) => (
                            <MaterialIcons name="chat" color={color} size={size} />
                        ),
                    }}
                />
                <Drawer.Screen
                    name="Setting"
                    component={Screen4}
                    options={{
                        drawerIcon: ({ size, color }) => (
                            <MaterialIcons name="settings" color={color} size={size} />
                        ),
                    }}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({
    userInfoSection: {
        padding: 20, // Thay đổi về giá trị padding  
        alignItems: 'center',
        height: 180, // Bạn có thể điều chỉnh chiều cao phù hợp  
    },
    profileContainer: {
        alignItems: 'center',
        marginTop: 20, // Thêm khoảng cách từ trên xuống  
    },
    profileImage: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginBottom: 10,
    },
    userName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'red', // Thay đổi màu chữ nếu cần  
    },
    userEmail: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'red', // Thay đổi màu chữ nếu cần  
    },
    drawerItemListContainer: {
        marginTop: 20, // Thêm khoảng cách giữa hình nền và danh sách mục  
    },
    appVersion: {
        marginTop: 250, // Thêm một chút khoảng cách trên cho dòng chữ phiên bản  
        textAlign: 'center', // Canh giữa văn bản  
        color: 'red', // Màu chữ  
    },
});

export default lab6bai3;