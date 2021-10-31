import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Icon from '../components/Icon';

import { connect } from 'react-redux';
import { addToFavourites } from '../redux/actionCreators';

const mapStateToProps = state => {
    return {
        favourites: state.favourites,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addToFavourites: dish => dispatch(addToFavourites(dish)),
    }
}

const DishDetailScreen = props => {
    const dish = props.route.params.dish;

    const isFavourite = props.favourites.some(item => item.id === dish.id);

    const markFavourite = dish => {
        if (isFavourite) {
            alert("Already Added to Favourites!");
        } else {
            props.addToFavourites(dish);
        }
    }
    let iconName = "ios-heart-outline";
    if (isFavourite) {
        iconName = "ios-heart";
    }
    return (
        <View>
            <Image source={{ uri: dish.image }} style={styles.image} />
            <View style={styles.details}>
                <Icon name={iconName} color='#F53B50' size={39} iconStyle={{ padding: 10 }} action={() => markFavourite(dish)} />
                <Text>{dish.description}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: 300,
    },
    name: {
        fontSize: 20,
        fontWeight: "500",
    },
    details: {
        padding: 10,
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(DishDetailScreen);