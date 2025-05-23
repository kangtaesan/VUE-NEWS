<template>
    <div>
        <div class="user-container">
            <!-- 질문 상세 정보 -->
            <div>
                <i class="fa-solid fa-user"></i>
            </div> <!-- 사용자 프로필 -->
            <div class="user-description">
                <slot name="username">
                    <!-- 상위 컴포넌트에서 정의할 영역 -->
                </slot>
                <!-- ItmeView에서는 info.user로 접근 -->
                <!-- UseView에서는 info.id로 접근 -->
                <div class="time">
                    <slot name="time">
                        <!-- 상위 컴포넌트에서 정의할 영역 -->
                    </slot>
                </div>
                <div class="karma">
                    <slot name="karma">
                        <!-- 상위 컴포넌트에서 정의할 영역 -->
                    </slot>
                </div>
            </div> <!-- .user-description end / 사용자 정보 -->
        </div> <!-- .user_container end -->
    </div>
</template>

<script>
export default {
    props: {
        info: Object
    },
}
</script>

<style scoped>
.user-container {
    display: flex;
    align-items: center;
    padding: 0.5rem;
}

.fa-user {
    font-size: 2.5rem;
}

.user-description {
    padding-left: 8px;
}

.time {
    font-size: 0.7rem;
}
.karma {
    font-size: 0.7rem;
}
</style>