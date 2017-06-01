/**
 * Created by ZZF on 2017/5/23.
 */
import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Switch,
  ActivityIndicator,
  KeyboardAvoidingView
} from 'react-native'
import { connect } from 'react-redux'

import I18n from 'react-native-i18n'
import { EditUserInfo, GoToHome } from '../../store/actions'

import styles from '../../common/styles'

import SignInfoButton from '../../components/StyleButton'
import InputItem from '../../components/InputItem'
import BackgroudImage from '../../components/BackgroundImage'
import DatePicker from 'react-native-datepicker'
import Picker from 'react-native-picker'

const agreementText = `

与世科技（北京）有限公司（以下简称本程序或“uniworld”）在此特别提醒您在注册成为用户之前，请认真阅读本《用户协议》（以下简称“协议”），确保您充分理解本协议中各条款。您的注册、登录、使用等行为将视为对本协议的接受，并同意接受本协议各项条款的约束。 \n

本协议约定本程序与用户之间关于服务的权利义务。“用户”是指通过Uniworld邮件系统实名认证，注册、登录、使用本程序的高等教育全日制在校生，通过技术手段虚假身份进入程序的，本程序不承认其享有用户身份，一切后果自负。本协议可由本程序随时更新，更新后的协议条款一旦公布即代替原来的协议条款，恕不再另行通知，用户可在本程序查阅最新版协议条款。在本程序修改协议条款后，如果用户不接受修改后的条款，请立即停止使用本程序提供的服务，用户继续使用本程序提供的服务将被视为接受修改后的协议。\n

一、用户确认，其兴趣爱好信息为非个人隐私信息，用户成功注册“uniworld”账号视为确认授权本程序提取、公开及使用用户的兴趣爱好等信息。个人兴趣爱好信息将作为用户公开资料之一，由本程序向其他用户公开。为了改善本程序的技术和服务，向用户提供更好的服务体验，本程序或可会自行收集使用或向第三方提供用户的非个人隐私信息。  二、用户理解并同意，“uniworld”仅为用户提供信息分享、传送及获取的平台，用户必须为自己注册账号下的一切行为负责，包括用户所传送的任何内容以及由此产生的任何后果。\n
1、用户不得利用“uniworld”账号制作、上载、复制、发布、传播如下法律、法规和政策禁止的内容（本条所述内容是指用户使用“uniworld”过程中所制作、上载、复制、发布、传播的任何内容，包括但不限于账号头像、名称、用户说明等注册信息及认证资料，或文字、语音、图片、视频、图文等发送、回复或自动回复消息和相关链接页面，以及其他使用账号或本程序所产生的内容）： \n
(1) 反对宪法所确定的基本原则的；\n
(2) 危害国家安全，泄露国家秘密，颠覆国家政权，破坏国家统一的；\n
(3) 损害国家荣誉和利益的； \n
(4) 煽动民族仇恨、民族歧视，破坏民族团结的； \n
(5) 破坏国家宗教政策，宣扬邪教和封建迷信的； \n
(6) 散布谣言，扰乱社会秩序，破坏社会稳定的； \n
(7) 散布淫秽、色情、赌博、暴力、凶杀、恐怖或者教唆犯罪的；\n
(8) 侮辱或者诽谤他人，侵害他人合法权益的； \n
(9) 含有法律、行政法规禁止的其他内容的信息。 \n
2、用户不得利用“uniworld”账号或本程序制作、上载、复制、发布、传播如下干扰“uniworld”正常运营，以及侵犯其他用户或第三方合法权益的内容： \n
(1) 含有任何性或性暗示的； \n
(2) 含有辱骂、恐吓、威胁内容的； \n
(3) 含有骚扰、垃圾广告、恶意信息、诱骗信息的； \n
(4) 涉及他人隐私、个人信息或资料的； \n
(5) 侵害他人名誉权、肖像权、知识产权、商业秘密等合法权利的； \n
(6) 含有其他干扰本程序正常运营和侵犯其他用户或第三方合法权益内容的信息。 \n
3、用户不得利用“uniworld”账号或本程序进行如下行为： \n
(1) 提交、发布虚假信息，或盗用他人头像或资料，冒充、利用他人名义的； \n
(2) 强制、诱导其他用户关注、点击链接页面或分享信息的； \n
(3) 虚构事实、隐瞒真相以误导、欺骗他人的； \n
(4) 利用技术手段批量建立虚假账号的； \n
(5) 利用“uniworld”账号或本程序从事任何违法犯罪活动的；\n
(6) 制作、发布与以上行为相关的方法、工具，或对此类方法、工具进行运营或传播，无论这些行为是否为商业目的； \n
(7) 其他违反法律法规规定、侵犯其他用户合法权益、干扰“uniworld”正常运营或本程序未明示授权的行为。 \n
4、用户须对利用“uniworld”账号或本程序传送信息的真实性、合法性、无害性、准确性、有效性等全权负责，与用户所传播的信息相关的任何法律责任由用户自行承担，与本程序无关。用户在本程序中或通过本程序所传送、发布的任何内容并不反映或代表，也不得被视为反映或代表与世科技的观点、立场或政策，与世科技对此不承担任何责任。如因此给本程序或第三方造成损害的，用户应当依法予以赔偿。用户理解并同意，因用户违反本协议约定，导致或产生的任何第三方主张的任何索赔、要求或损失，包括合理的律师费，用户应当赔偿与世科技与合作公司、关联公司，并使之免受损害。\n

三、内容风险提示\n
1、用户应对本程序中第三方提供的内容自行加以判断，并承担因使用内容而引起的所有风险，包括因对内容的真实性、完整性或实用性的依赖而产生的风险。\n
2、本程序提供的服务中可能包括广告，用户同意在使用过程中显示本程序和第三方供应商、合作伙伴提供的广告。除法律法规明确规定外，用户应自行对依该广告信息进行的交易负责，对用户因依该广告信息进行的交易或前述广告商提供的内容而遭受的损失或损害，本程序不承担任何责任。 \n
3、本程序无法且不会对因用户及第三方行为而导致的任何损失或损害承担责任。如果用户发现任何人违反本协议约定或以其他不当的方式使用本服务，请立即向本程序举报或投诉，本程序将依本协议约定进行处理。\n

四、活动风险提示\n
您承认并同意，uniworld无义务对任何用户进行背景调查。如果您决定使用适用本程序提供的参与推荐计划，您即确认自行承担风险，本程序对用户与第三方之间的活动造成的人身、财产损失不承担任何责任。\n

五、不可抗力及其他免责事由\n
1、用户理解并确认，在使用本程序的过程中，可能会遇到不可抗力等风险因素，使本程序发生中断。不可抗力是指不能预见、不能克服并不能避免且对一方或双方造成重大影响的客观事件，包括但不限于自然灾害如洪水、地震、瘟疫流行和风暴等以及社会事件如战争、动乱、政府行为等。出现上述情况时，本程序将努力在第一时间与相关单位配合，及时进行修复，但是由此给用户或第三方造成的损失，本程序及合作单位在法律允许的范围内免责。\n
2、本程序同大多数互联网服务一样，受包括但不限于用户原因、网络服务质量、社会环境等因素的差异影响，可能受到各种安全问题的侵扰，如他人利用用户的资料，造成现实生活中的骚扰。用户应加强信息安全及使用者资料的保护意识，要注意加强密码保护，以免遭致损失和骚扰。\n
3、用户理解并确认，本程序存在因不可抗力、计算机病毒或黑客攻击、系统不稳定、用户所在位置、用户关机以及其他任何技术、互联网络、通信线路原因等造成的服务中断或不能满足用户要求的风险，因此导致的用户或第三方任何损失，本程序不承担任何责任。\n
4、用户理解并确认，在使用本程序过程中存在来自任何他人的包括误导性的、欺骗性的、威胁性的、诽谤性的、令人反感的或非法的信息，或侵犯他人权利的匿名或冒名的信息，以及伴随该等信息的行为，因此导致的用户或第三方的任何损失，本程序不承担任何责任。\n
5、在任何情况下，本程序均不对任何间接性、后果性、惩罚性、偶然性、特殊性或刑罚性的损害，包括因用户使用“uniworld”而遭受的财产或未来利润损失承担责任（即使本程序已被告知该等损失的可能性亦然）。\n

六、知识产权说明\n
1、除本程序中涉及广告的知识产权由相应广告商享有外，本程序在本服务中提供的内容（包括但不限于网页、文字、图片、音频、视频、图表等）的知识产权均归本程序所有，但用户在使用本服务前对自己发布的内容已合法取得知识产权的除外。\n
2、本程序中所涉及的图形、文字或其组成，以及其他标志及产品、服务名称（以下统称“本程序标识”），其著作权或商标权归与世科技（北京）有限公司所有。未经本程序事先书面同意，用户不得以任何形式进行使用或创造程序相关衍生作品。\n

七、服务的变更、中断、终止\n
如发生下列任何一种情形，本程序有权变更、中断或终止向用户提供的服务，而无需对用户或任何第三方承担任何责任：\n
(1) 根据法律规定用户应提交真实信息，而用户提供的个人资料不真实、或与注册时信息不一致又未能提供合理证明；\n
(2) 用户违反相关法律法规或本协议的约定；\n
(3) 按照法律规定或有权机关的要求；\n
(4) 出于安全的原因或其他必要的情形。\n

`

const mapStateToProps = state => ({
  userInfo: state.signInfo
})
@connect(mapStateToProps, dispatch => ({ dispatch }))
export default class SecondPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isuploading: false,
      disabled: false,
      signInfo: {
        name: '',
        gender: '',
        birthday: '',
        department: '',
        grade: '',
        signature: '',
      },
      agreement: false
    }
  }

  _isCompleted = () => (
    this.state.signInfo.name &&
    this.state.signInfo.name.length > 0 &&
    this.state.signInfo.name.length < 16 &&
    this.state.signInfo.gender &&
    this.state.signInfo.department &&
    this.state.signInfo.grade &&
    this.state.signInfo.signature
  )
  next = () => {
    const data = {
      name: this.state.signInfo.name,
      gender: this.state.signInfo.gender[0] == 'male' ? 1 :
        this.state.signInfo.gender[0] == 'female' ? 0 : null,
      department: this.state.signInfo.department,
      signature: this.state.signInfo.signature,
      grade: this.state.signInfo.grade[0]
    }
    this.props.dispatch(EditUserInfo(data))
    this.setState({ disabled: true })
    setTimeout(() => this.setState({ disabled: false }), 1000)
    this.props.dispatch(GoToHome)
  }

  _showGenderPicker() {
    Picker.init({
      pickerData: ['male', 'female', 'lsbt'],
      // selectedValue: ['河北', '唐山', '古冶区'],
      pickerTitleText: I18n.t('SignInfo.second.gender'),
      onPickerConfirm: pickedValue => {
        this.setState({
          signInfo: {
            ...this.state.signInfo,
            gender: pickedValue
          }
        })
      },
      onPickerCancel: pickedValue => {
        // console.log('area', pickedValue)
      },
      onPickerSelect: pickedValue => {
        // console.log('area', pickedValue)
      }
    })
    Picker.show()
  }
  _showGradePicker() {
    Picker.init({
      pickerData: [2012, 2013, 2014, 2015, 2016, 2017],
      pickerFontSize: 14,
      pickerTitleText: I18n.t('SignInfo.second.grade'),
      onPickerConfirm: pickedValue => {
        this.setState({
          signInfo: {
            ...this.state.signInfo,
            grade: pickedValue
          }
        })
      },
      onPickerCancel: pickedValue => {
        // console.log('area', pickedValue)
      },
      onPickerSelect: pickedValue => {
        // console.log('area', pickedValue)
      }
    })
    Picker.show()
  }


  render() {
    return (
      <KeyboardAvoidingView behavior={'position'}>
        <ScrollView >
          {!this.state.agreement ? <View>
            <BackgroudImage
              bgUrl={require('../../assets/image/signInfoBg.png')}
              style={{ height: 700 }}
            >
              <View style={[styles.fullFlex, styles.grayBackground, { paddingTop: 50 }]}>
                <Image style={localStyles.header} source={require('../../assets/image/signInfo2.png')} />
              </View>
              <Text style={[styles.fullflex, localStyles.title]}>{I18n.t('SignInfo.second.title')}</Text>

              <View style={{ paddingTop: 40 }}>
                <View style={[localStyles.wrap]}>
                  <Text style={localStyles.inputTitle}>
                    {I18n.t('SignInfo.second.nickname')}
                  </Text>
                  <TextInput
                    style={[localStyles.inputWrap]}
                    defaultValue={this.state.signInfo.name}
                    onChangeText={name =>
                      this.setState({
                        signInfo: {
                          ...this.state.signInfo,
                          name: name
                        }
                      })}
                    placeholder={I18n.t('SignInfo.second.nickname')}
                  />
                </View>
                <View style={[localStyles.wrap]}>
                  <Text style={localStyles.inputTitle}>
                    {I18n.t('SignInfo.second.gender')}
                  </Text>
                  <TouchableOpacity onPress={this._showGenderPicker.bind(this)}>
                    <Text
                      style={localStyles.inputWrap}
                    >
                      {this.state.signInfo.gender ?
                        this.state.signInfo.gender :
                        <Text style={{ color: '#bcbcbc' }}>{I18n.t('SignInfo.second.gender')}</Text>
                      }
                    </Text>
                  </TouchableOpacity>
                </View>
                {/*<View style={[localStyles.wrap]}>
                  <Text style={localStyles.inputTitle}>
                    {I18n.t('SignInfo.second.birthday')}
                  </Text>
                  <DatePicker
                    mode="date"
                    date={this.state.birthday}
                    style={[localStyles.inputWrap]}
                    placeholder={I18n.t('SignInfo.second.birthday')}
                    format="YYYY-MM-DD"
                    minDate="1960-01-01"
                    maxDate="2020-01-01"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    showIcon={false}
                    customStyles={{
                      dateInput: {
                        alignItems: 'flex-start',
                        borderWidth: 0,
                        fontSize: 14
                      },
                      dateIcon: {
                        marginLeft: 50
                      }
                    }}
                    onDateChange={birthday => {
                      this.setState({
                        signInfo: {
                          ...this.state.signInfo,
                          birthday: birthday
                        }
                      })
                    }
                    }
                  />
                </View>*/}
                <View style={[localStyles.wrap]}>
                  <Text style={[localStyles.inputTitle]}>
                    {I18n.t('SignInfo.second.grade')}
                  </Text>
                  <TouchableOpacity onPress={this._showGradePicker.bind(this)}>
                    <Text
                      style={localStyles.inputWrap}
                    >
                      {this.state.signInfo.grade ?
                        this.state.signInfo.grade :
                        <Text style={{ color: '#bcbcbc' }}>{I18n.t('SignInfo.second.grade')}</Text>}
                    </Text>
                  </TouchableOpacity>
                </View>
                <View style={[localStyles.wrap]}>
                  <Text style={localStyles.inputTitle}>
                    {I18n.t('SignInfo.second.department')}
                  </Text>
                  <TextInput
                    style={localStyles.inputWrap}
                    defaultValue={this.state.signInfo.department}
                    placeholder={I18n.t('SignInfo.second.department')}
                    onChangeText={department =>
                      this.setState({
                        signInfo: {
                          ...this.state.signInfo,
                          department: department
                        }
                      })}
                  />
                </View>
                <View style={[localStyles.wrap]}>
                  <Text style={localStyles.inputTitle}>
                    {I18n.t('SignInfo.second.signature')}
                  </Text>
                  <TextInput
                    style={[localStyles.inputWrap]}
                    defaultValue={this.state.signInfo.signature}
                    placeholder={I18n.t('SignInfo.second.signature')}
                    onChangeText={signature =>
                      this.setState({
                        signInfo: {
                          ...this.state.signInfo,
                          signature: signature
                        }
                      })}
                  />
                </View>
              </View>

              <View>
                <TouchableOpacity
                  onPress={() => { this.setState({ agreement: true }) }}
                  style={localStyles.agreementButton}
                >
                  <View style={localStyles.agreementTextView}>
                    <Text style={localStyles.agreementText}>
                      {I18n.t('SignInfo.second.agreement')}
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>

              <View style={[styles.fullFlexWidth, { marginLeft: 20, marginRight: 20, marginBottom: 30 }]}>
                <SignInfoButton
                  disabled={!this._isCompleted()}
                  title={I18n.t('SignInfo.second.continue')}
                  onPress={this.next}
                  inlineStyle={[localStyles.button, this._isCompleted() ? localStyles.active : localStyles.disabled]}
                />
              </View>
            </BackgroudImage>
          </View> :
            <View>
              <View style={{textAlign: 'center',paddingTop: 40,}}>
                <Text style={[localStyles.agreement,{textAlign: 'center'}]} >
                  {I18n.t('SignInfo.second.agreement')}
                </Text>
              </View>
              <View style={localStyles.lawText}>
                <Text style={[localStyles.agreement]}>{agreementText}</Text>
              </View>
              <View style={[styles.fullFlexWidth, { marginLeft: 20, marginRight: 20 }]}>
                <SignInfoButton
                  title={I18n.t('SignInfo.second.back')}
                  onPress={() => {
                    this.setState({
                      agreement: false
                    })
                    console.log(this.state.agreement)
                  }
                  }
                  inlineStyle={[localStyles.button, localStyles.active]}
                />
              </View>
            </View>
          }
        </ScrollView>
      </KeyboardAvoidingView>
    )
  }
}

const coverSize = 60
const localStyles = StyleSheet.create({
  cover: {
    margin: 4,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  wrap: {
    marginTop: 2,
    marginBottom: 14,
    marginLeft: 20,
    marginRight: 20,
    // backgroundColor:'black',
    height: 48,
    borderBottomColor: '#3555b6',
    borderBottomWidth: 1
  },
  header: {
    height: 115,
    resizeMode: 'contain',
    backgroundColor: 'transparent'
  },
  title: {
    color: '#3555B6',
    fontSize: 16,
    paddingTop: 22,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
    backgroundColor: 'transparent'
  },
  button: {
    marginTop: 22,
    marginBottom: 20,
    borderRadius: 5,
    padding: 15
  },
  active: {
    backgroundColor: '#ec5367',
  },
  disabled: {
    backgroundColor: '#cbcbcb'
  },
  transparent: {
    backgroundColor: 'transparent'
  },
  input_flex: {
    flexDirection: 'column',
    alignItems: 'stretch',
    paddingTop: 0,
    paddingBottom: 0,
    borderBottomWidth: 0,
  },
  inputTitle: {
    marginTop: 0,
    marginLeft: 0,
    marginRight: 0,
    lineHeight: 15,
    color: '#3555B6',
    fontSize: 15,
    backgroundColor: 'transparent'
  },
  inputWrap: {
    paddingTop: 4,
    width: '100%',
    height: 25,
    backgroundColor: 'transparent',
    fontSize: 14
  },
  agreement: {
    color: "#3555b6",
  },

  agreementText: {
    textAlign: 'center',
    color: "#3555b6",
    fontWeight: "500"
  },

  agreementTextView: {
    paddingTop: 40,
    textAlign: 'center',
    color: "#ec5367",
    borderBottomWidth: 1,
    borderBottomColor: "#3555b6"
  },
  agreementButton: {
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  lawText: {
    textAlign: 'left',
    padding: 10
  }
})
