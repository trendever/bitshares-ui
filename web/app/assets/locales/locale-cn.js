module.exports = {
    languages: {
        en: "English",
        cn: "简体中文",
        fr: "French",
        switch: "语言选择"
    },
    header: {
        title: "比特股 2.0",
        dashboard: "概览",
        explorer: "浏览",
        exchange: "交易",
        payments: "支付",
        logout: "注销",
        settings: "设置",
        current: "当前账户"
    },
    account: {
        assets: "资产",
        value: "价值",
        hour_24: "24小时",
        recent: "近期活动",
        name: "账户名",
        member: {
            stats: "会员统计",
            join: "加入于",
            reg: "注册人",
            ref: "推荐人",
            referrals: "被推荐人",
            rewards: "返现奖励",
            cashback: "返现",
            vested: "既得"
        },
        connections: {
            known: "Known by",
            "black": "被屏蔽"
        }
    },
    transfer: {
        from: "来自",
        amount: "金额",
        to: "发往",
        memo: "备注消息",
        fee: "手续费",
        send: "发送",
        final: "转账后余额",
        balances: "余额",
        errors: {
            req: "必填信息",
            pos: "数量必须大于0",
            valid: "请输入一个合法的大于0的半角数字"
        },
        back: "返回",
        confirm: "确认发送",
        broadcast: "你的转账已经向网络广播",
        again: "发起新的转账",
        see: "查看我的转账记录"
    },
    transaction: {
        sent: "已发送",
        to: "发往",
        received: "已接收",
        from: "来自",
        amount_sell: "出售数量",
        expiration: "过期时间",
        fill_or: "成交或取消",
        min_receive: "接收的最小数量",
        seller: "卖家",
        collateral: "抵押",
        coll_ratio: "初始抵押率",
        coll_maint: "Collateral maintenance ratio",
        "create_key": "创建一个公钥",
        reg_account: "注册账户",
        was_reg_account: "注册人",
        create_asset: "Created the asset",
        limit_order: "限价出售单",
        limit_order_buy: "限价买入单",
        limit_order_cancel: "已取消的限价单",
        short_order: "空单",
        short_order_cancel: "已取消的空单Cancelled short with id",
        at: "at",
        coll_of: "抵押为",
        call_order_update: "Updated call order",
        upgrade_account: "升级到终身会员账户",
        update_account: "Updated account",
        whitelist_account: "Whitelisted the account",
        whitelisted_by: "Was whitelisted by the account",
        transfer_account: "Transferred the account",
        update_asset: "Updated the asset",
        update_feed_producers: "Updated the feed producers of asset",
        feed_producer: "Became a feed producer for the asset",
        asset_issue: "Issued",
        was_issued: "Was issued",
        by: "by",
        burn_asset: "Burnt",
        fund_pool: "Funded asset fee pool with",
        asset_settle: "Requested settlement of",
        asset_global_settle: "Requested global settlement of",
        publish_feed: "Published new feed for asset",
        delegate_create: "Created the delegate",
        witness_create: "Created the witness",
        witness_pay: "Withdrew witness pay to account",
        witness_receive: "Received witness from witness",
        proposal_create: "Created a proposal",
        proposal_update: "Updated a proposal",
        proposal_delete: "Deleted a proposal",
        withdraw_permission_create: "Gave withdrawal permission for account",
        withdraw_permission_update: "Updated withdrawal permission for account",
        withdraw_permission_claim: "Claimed withdrawal permission for account",
        withdraw_permission_delete: "Deleted withdrawal permissions for account",
        paid: "Paid",
        obtain: "to obtain",
        global_parameters_update: "Updated global parameters",
        file_write: "Wrote a file",
        vesting_balance_create: "created vesting balance of",
        for: "for",
        vesting_balance_withdraw: "Withdrew vesting balance of",
        bond_create_offer: "Created bond offer",
        bond_cancel_offer: "Cancelled bond offer",
        bond_accept_offer: "Accepted bond offer of",
        bond_claim_collateral: "Claimed collateral of",
        bond_pay_collateral: "Paid collateral of",
        create_worker: "Created a worker with a pay of",
        custom: "Created a custom operation",
        order_id: "Order ID",
        trxTypes: {
            0: "转账",
            1: "限价单",
            2: "取消限价单",
            3: "Update call order",
            4: "创建账户",
            5: "更新账户",
            6: "Account whitelist",
            7: "升级账户",
            8: "账户转移",
            9: "创建资产",
            10: "更新资产",
            11: "更新智能币",
            12: "更新资产喂价者",
            13: "发行资产",
            14: "销毁资产",
            15: "积存资产费用池",
            16: "资产结算",
            17: "Global asset settlement",
            18: "发布资产喂价",
            19: "创建受托人",
            20: "创建见证人",
            21: "见证人取回报酬",
            22: "创建提案",
            23: "更新提案",
            24: "删除提案",
            25: "创建取回权限",
            26: "更新取回权限",
            27: "Claim withdrawal permission",
            28: "删除取回权限",
            29: "撮合订单",
            30: "全局参数更新",
            31: "创建冻结账目余额",
            32: "取回解冻账户余额",
            33: "创建雇员",
            34: "自定义"
        }
    },
    explorer: {
        accounts: {
            title: "账户"
        },
        blocks: {
            title: "区块链",
            globals: "全局参数",
            recent: "最近区块"
        },
        block: {
            title: "区块",
            id: "区块 ID",
            witness: "见证人",
            count: "交易数",
            date: "日期",
            previous: "上一个",
            previous_secret: "上一个密文",
            next_secret: "下一个密文哈希值",
            op: "操作",
            trx: "交易",
            op_type: "操作类型",
            fee_payer: "手续费支付账户",
            key: "公钥",
            transactions: "交易数量",
            account_upgrade: "可升级账户",
            lifetime: "升级到终身会员账户",
            authorizing_account: "授权账户",
            listed_account: "Listed account",
            new_listing: "New listing",
            asset_update: "可更新资产",
            common_options: "Common options",
            new_options: "New options",
            new_producers: "New feed producers",
            asset_issue: "发行数量",
            max_margin_period_sec: "Max margin period (s)",
            call_limit: "Call limit",
            short_limit: "Short limit",
            settlement_price: "结算价格"
        },
        assets: {
            title: "资产",
            market: "智能币",
            user: "用户发行资产",
            symbol: "代码",
            id: "ID",
            issuer: "发行人",
            precision: "精度"
        },
        asset: {
            title: "资产"
        },
        witnesses: {
            title: "见证人"
        },
        delegates: {
            title: "受托人"
        },
        delegate: {
            title: "受托人"
        },
        workers: {
            title: "雇员"
        },
        proposals: {
            title: "提案"
        },
        account: {
            title: "账户"
        }
    },
    settings: {
        inversed: "市场交易对视角",
        unit: "显示记账单位"
    }
};
