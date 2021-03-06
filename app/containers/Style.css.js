/**
 * 页面样式
 *
 * @flow
 */
'use strict';
import {
    StyleSheet,
    Dimensions,
    Platform,
} from 'react-native';
import Colors from '../assets/Colors';

var window = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f4f4f4',
    },


    btn_default: {
        borderRadius: 3,
        borderWidth: 1,
        borderColor: '#FFB8C6',
        backgroundColor: '#FFF7F8',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 8,
        paddingVertical: 5,
    },
    btn_disabled: {
        borderRadius: 3,
        borderWidth: 1,
        borderColor: '#eee',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f4f4f4',
        paddingHorizontal: 8,
        paddingVertical: 5,
    },
    btn_switch_off:{
        height: 26,
        width: 54,
        borderRadius: 13,
        borderWidth: 2,
        borderColor: '#bbb',
        alignItems: 'center',
        backgroundColor: '#bbb',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    btn_switch_on:{
        height: 26,
        width: 54,
        borderRadius: 13,
        borderWidth: 2,
        borderColor: 'rgb(250,110,120)',
        alignItems: 'center',
        backgroundColor: 'rgb(250,110,120)',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    btn_switch_icon:{
        backgroundColor: '#fff',
        height: 22,
        width: 22,
        borderRadius: 11,
    },
    btn_switch_text:{
        color: '#fff',
        paddingHorizontal: 7,
        fontSize: 12,
        paddingBottom: .5,
    },

    text_input: {
        borderRadius: 3,
        borderWidth: 1,
        borderColor: '#eee',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#fff',
        flexDirection: 'row',
        padding: 6,
    },

    inputbar: {
        padding: 10,
        backgroundColor: '#fff',
        borderTopColor: '#eee',
        borderTopWidth: 1,
    },

    tab_page:{
        flex: 1,
        backgroundColor: '#eee',
    },



    flex_1:{
        flex: 1,
    },
    flex_wrap: {
        flexWrap: 'wrap',
    },
    flex_row: {
        flexDirection: 'row',
    },
    flex_column: {
        flexDirection: 'column',
    },
    flex_between: {
        justifyContent: 'space-between',
    },
    align_start:{
        alignItems: 'flex-start',
    },
    align_end:{
        alignItems: 'flex-end',
    },
    align_center: {
        alignItems: 'center',
    },

    margin_left_10: {
        marginLeft: 10,
    },
    margin_top_10: {
        marginTop: 10,
    },
    margin_right_10: {
        marginRight: 10,
    },
    margin_bottom_10:{
        marginBottom: 10,
    },
    margin_left_5: {
        marginLeft: 5,
    },
    margin_right_5: {
        marginRight: 5,
    },
    margin_top_5: {
        marginTop: 5,
    },

    color_black: {
        color: '#000',
    },
    color_white:{
        color: '#fff',
    },
    color_gray:{
        color: '#ccc',
    },
    color_deep:{
        color: '#666',
    },
    color_pink:{
        color: '#FE7A93',
    },


    font_size_12:{
        fontSize:12,
    },
    font_size_14:{
        fontSize:14,
    },
    font_size_16:{
        fontSize:16,
    },
    font_size_18:{
        fontSize:18,
    },
    font_size_20:{
        fontSize:20,
    },

    module:{
        marginHorizontal: 10,
        marginTop: 10,
        backgroundColor: '#fff',
    },
    module_head:{
        borderBottomColor: '#eee',
        borderBottomWidth: 1,
    },
    module_head_text:{
        fontWeight: 'bold',
    },
    module_body: {
        padding: 15,
    },

    //stepper
    stepper:{
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#FFB8C6',
        justifyContent: 'flex-start',
        alignItems: 'center',
        alignSelf:'flex-start',
        flexDirection: 'row',
        backgroundColor: '#fff',
    },
    stepper_btn:{
        borderRadius: 3,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF1F2',
        paddingHorizontal: 8,
        paddingTop:1,
    },
    stepper_btn_disabled:{
        borderRadius: 3,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF7F8',
        paddingHorizontal: 8,
        paddingTop:1,
    },
    left_btn:{
        borderBottomRightRadius:0,
        borderTopRightRadius:0,
    },
    right_btn:{
        borderBottomLeftRadius:0,
        borderTopLeftRadius:0,
    },
    stepper_txt:{
        justifyContent: 'center',
        alignItems: 'center',
        flex:1,
        textAlign:'center',
        color: '#777',
        fontSize: 20,
    },
    stepper_input:{
        justifyContent: 'center',
        alignItems: 'center',
        width: 30,
        textAlign:'center',
        color: '#777',
    },

    //form
    form_item:{
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: Colors.light,
        borderBottomWidth: 1,
        height: 50,
        flex:1,
    },
    form_input:{
        flex:1,
        color: '#999',
        fontSize: 16,
        paddingTop:2,
    },
    form_ttl:{
        marginRight: 20,
        color: Colors.dark,
        fontSize: 16,
    },
    form_submit:{
        borderRadius: 3,
        borderWidth: 1,
        borderColor: '#FFB8C6',
        backgroundColor: '#FFF7F8',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingVertical: 10,
        alignSelf: 'flex-end',
    },
    form_submit_disabled:{
        borderRadius: 3,
        borderWidth: 1,
        borderColor: '#eee',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f4f4f4',
        paddingHorizontal: 15,
        paddingVertical: 10,
        alignSelf: 'flex-end',
    },
    form_info:{
        flex:1,
        color:Colors.red,
    },
    clear_btn:{
        justifyContent: 'center',
        alignItems: 'center',
        width: 30,
    },
    secure_btn:{
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 8,
        width: 40,
    },
    get_code_btn:{
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius:3,
        backgroundColor: '#f4f4f4',
        justifyContent: 'center',
        alignItems: 'center',
        padding:10,
    },
    get_code_btn_disabled:{
        borderColor: '#fff',
        borderWidth: 1,
        borderRadius:3,
        backgroundColor: '#f4f4f4',
        justifyContent: 'center',
        alignItems: 'center',
        padding:10,
    },

    list_btn:{
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: Colors.light,
        borderBottomWidth: 1,
        height: 40,
        flex:1,
    },


    todo: {
        fontSize: 20,
    },
    done: {
        color: 'gray',
        textDecorationLine: 'line-through',
    },
});

module.exports = styles;