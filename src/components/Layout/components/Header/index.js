

import Tippy from '@tippyjs/react';


import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faEarthAsia, faEllipsisVertical, faKeyboard, faQuestionCircle, faSignIn, faUser, faCoins, faGear, faSignOut } from '@fortawesome/free-solid-svg-icons';





import styles from './Header.module.scss'
import images from '~/assets/images';
import 'tippy.js/dist/tippy.css';


import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import { UploadIcon } from '~/components/Icons';
import Image from '~/components/image';
import Search from '../Search';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
        {
                icon: <FontAwesomeIcon icon={faEarthAsia} />,
                title: 'English',
                children: {
                        title: 'Language',
                        data: [
                                {
                                        type:'language',
                                        code:'en',
                                        title:'English'
                                },
                                {
                                        type:'language',
                                        code:'vi',
                                        title:'Tiếng Việt'
                                }
                        ]
                }
        },
        {
                icon: <FontAwesomeIcon icon={faQuestionCircle} />,
                title: 'Feedback and help',
                to:'/feedback'
        },
        {
                icon: <FontAwesomeIcon icon={faKeyboard} />,
                title: 'Keyboard shortcuts',
        }
];


function Header() {
       

        const currentUser  = true ;

       

        const handleMenuChange = (menuItem) => {
                
              switch (menuItem.type) {
                case 'language':
                       
                        break;
              
                default:
                        
              }
        }

        const userMenu = [
                {
                        icon: <FontAwesomeIcon icon={faUser} />,
                        title: 'View profile',
                        to:'/profile'
                },
                {
                        icon: <FontAwesomeIcon icon={faCoins} />,
                        title: 'Get coins',
                        to:'/coins'
                },
                {
                        icon: <FontAwesomeIcon icon={faGear} />,
                        title: 'Setting',
                        to:'/setting'
                },
                ...MENU_ITEMS,
                {
                        icon: <FontAwesomeIcon icon={faSignOut} />,
                        title: 'Log out',
                        to:'/logout',
                        seperate: true,
                },
        ]


        

        return ( 
            <header className={cx('wrapper')}>
                    <div className={cx('inner')}>
                            <div className={cx('logo')}>
                                <img className={cx('logoSvg')} src={images.logo}  alt='vietnamflag' />
                                
                            </div>
                              
                                {/* SEARCH */}
                                <Search />
                                
                                <div className={cx('actions')}> 
                                        {currentUser ? (
                                                <>
                                                <Tippy  delay={[0,200]} content='Upload Video' placement='bottom'>
                                                        <button className={cx('action-btn')} >
                                                                <UploadIcon />
                                                        </button>
                                                </Tippy>
                                                </>
                                        ): (
                                                <>
                                                        <Button outline rightIcon={<FontAwesomeIcon icon={faSignIn} />} >Upload</Button>
                                                        <Button primary leftIcon={<FontAwesomeIcon icon={faSignIn} />} >Log in</Button>
                                                       
                                                </>
                                )}
                                        <Menu items={currentUser ? userMenu : MENU_ITEMS}  onChange={handleMenuChange}>
                                                {currentUser ? (
                                                        <Image 
                                                                src={images.logo3} 
                                                                className={cx('user-avatar')} 
                                                                alt='avatar' 
                                                                fallBack={images.noImage} 
                                                        />
                                                ) : (
                                                        
                                                        <button className={cx('more-btn')}>
                                                                <FontAwesomeIcon icon={faEllipsisVertical} />
                                                        </button>
                                                )}
                                               
                                        </Menu>
                                </div>

                    </div>
            </header>
     );
}

export default Header;