import { Flex, Tag, Typography } from "antd"

export default function CoinInfoModal ( {coin} ) {
    return <Flex align="center">
        <img src={coin.icon} alt="coin name" style={{ width:40 }} />
    </Flex>
}