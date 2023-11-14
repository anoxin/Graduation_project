<template lang="ru">
<div>
    <div v-if="isPopup" class="popup">
        <div class="popup__content">
            <button class="popup__close" @click="close()">&times;</button>
            <div class="main-form">
                <h3 class="popup__title">Введите свои данные для связи с нами!</h3>
                <form id="form3" name="user_form">
                    <div>
                        <input type="text" class="form__input" id="form3-name" name="user_name" placeholder="Ваше имя" required>
                    </div>
                    <div>
                        <input type="tel" class="form__input" id="form3-phone" name="user_phone" placeholder="Ваш номер телефона" required>
                    </div>
                    <div>
                        <input type="email" class="form__input" id="form3-email" name="user_email" placeholder="Ваш E-mail">
                    </div>
                    <div>
                        <textarea class="form__text" placeholder="Введите сообщение"></textarea>
                    </div>
                    <button class="form__btn" type="submit">Оставить заявку!</button>
                </form>
            </div>
        </div>
    </div>

</div>
</template>

<script>
export default {
    // name: 'modal',
	data () {
		return {
			isPopup: true
		}

	},

    methods: {
        close() {
            this.isPopup=!this.isPopup;
        },
    },
};
</script>

<style lang="scss">
.popup {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    width: 100vw;
    height: 100vh;
    z-index: 9;
    background-color: rgba(0, 0, 0, 0.5);

    &__title {
        color: #fff;
        font-size: 20px;
        margin-bottom: 30px;
    }

    &__close {
        position: absolute;
        z-index: 999999;
        top: 0;
        right: 1rem;
        width: 2rem;
        text-align: center;
        border: none;
        background: transparent;
        font-size: 3rem;
        color: #19b5fe;
    }

    &__content {
        position: fixed;
        text-align: center;
        width: 40rem;
        padding: 2rem 6rem;
        background-color: #24241f;
        border-radius: 30px;
    }
}

.form {
    &__input {
        display: block;
        left: 0;
        width: 100%;
        margin-right: 0;
        margin-top: 20px;
        padding: 10px;
        border-radius: 10px;

    }

    &__btn {
        margin-bottom: 15px;
        margin-top: 20px;
        padding: 10px 30px 10px 30px;
        border-radius: 10px;
        background: #19b5fe;
        color: #fff;
    }

    &__text {
        width: 100%;
        min-height: 80px;
        margin-top: 20px;
        padding: 10px;
        border-radius: 10px;

    }
}
</style>
