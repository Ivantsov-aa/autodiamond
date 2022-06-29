import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import InputMask from "react-input-mask";

import Header from "../header";
import Footer from "../footer";

const PrivacyInfo = ({ headerNav, footerNav, isLogged, authUser, handleLogOut, handleNewPersonalInfo }) => {
    const [stateEditor, openEditor] = useState(false);

    const {
        register,
        handleSubmit,
        control
    } = useForm({
        mode: 'onSubmit'
    });

    const handleOpenEditor = () => {
        openEditor(true);
    }


    const onSubmit = (data) => {
        console.log(data);
        if (data.photo.length > 0) {
            const reader = new FileReader();
            reader.readAsDataURL(data.photo[0]);

            reader.onload = () => {
                const urlPhoto = reader.result;
                handleNewPersonalInfo({ ...data, urlPhoto: urlPhoto });
            }

        } else {
            handleNewPersonalInfo(data)
        }
        openEditor(false);
    }

    return (
        <>
            <Header headerNav={headerNav} isLogged={isLogged} authUser={authUser} handleLogOut={handleLogOut} />
            <section className='personal_area'>
                <nav>
                    <ul>
                        <Link to={`/personal-area/${authUser.login.toLowerCase()}/info`} className='private active'><li>Личная информация</li></Link>
                        <Link to={`/personal-area/${authUser.login.toLowerCase()}/orders`} className='orders'><li>Заказы</li></Link>
                        <Link to={`/personal-area/${authUser.login.toLowerCase()}/terms`} className='agreement'><li>Условия обслуживания</li></Link>
                    </ul>
                </nav>
                {
                    !stateEditor ?
                        <div className='personal_info'>
                            <div className='photo'>
                                <img src={authUser.urlPhoto ? authUser.urlPhoto : '/images/default-icon-product.svg'} alt='user' />
                            </div>
                            <div className='about_person'>
                                <div className='person_name'>
                                    <div>
                                        {authUser.firstName && authUser.lastName ? <p>{authUser.firstName} <span>{authUser.lastName}</span></p> : <p>Как Вас зовут?</p>}
                                        {authUser.address ? <p>Адрес: <span>{authUser.address}</span></p> : <p>Адрес: Неизвестно</p>}
                                    </div>
                                    <button onClick={handleOpenEditor}></button>
                                </div>
                                <div className='contacts'>
                                    {authUser.phone ? <p>Телефон: <span>{authUser.phone}</span></p> : <p>Телефон: <span>Неизвестно</span></p>}
                                    <p>
                                        Электронная почта: <span>{authUser.mail}</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        :
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <label className='upload_photo'>
                                <input type='file' {...register('photo')} accept='image/*' />
                            </label>
                            <div className='edit__about_person'>
                                <div>
                                    <label>
                                        Имя:
                                        <input
                                            type='text'
                                            defaultValue={authUser.firstName ? authUser.firstName : ''}
                                            {...register('firstName')}
                                        />
                                    </label>
                                    <label>
                                        Фамилия:
                                        <input
                                            type='text'
                                            defaultValue={authUser.lastName ? authUser.lastName : ''}
                                            {...register('lastName')}
                                        />
                                    </label>
                                    <label>
                                        Адрес:
                                        <input
                                            type='text'
                                            defaultValue={authUser.address ? authUser.address : ''}
                                            {...register('address')}
                                        />
                                    </label>
                                    <label>
                                        Телефон:
                                        {/* <InputMask
                                            mask={'+{7} 000 000 00 00'}
                                        >
                                            <input
                                                type='tel'
                                                defaultValue={authUser.phone ? authUser.phone : ''}
                                                {...register('phone')}
                                            />
                                        </InputMask> */}
                                        {/* <Controller
                                            control={control}
                                            mask='+{7} 000 000 00 00'
                                            name='phone'
                                            render={({ field }) => ( */}
                                        <InputMask
                                            mask={'+{7} 000 000 00 00'}
                                            onChange={e => console.log(e)}
                                        >
                                            {(inputProps) => (
                                                <input
                                                    {...inputProps}
                                                    type='tel'
                                                    defaultValue={authUser.phone ? authUser.phone : ''}
                                                    {...register('phone')}
                                                />
                                            )}
                                        </InputMask>
                                        {/* )} */}
                                        {/* /> */}
                                    </label>
                                    <label>
                                        Электронная почта:
                                        <input
                                            type='text'
                                            defaultValue={authUser.mail}
                                            {...register('mail')}
                                        />
                                    </label>
                                </div>
                                <input type='submit' value='Подтвердить' />
                            </div>
                        </form>
                }

            </section>
            <Footer footerNav={footerNav} />
        </>
    )
}

export default PrivacyInfo;