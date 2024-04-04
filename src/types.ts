export interface Catalog {
    code: string;
    version: string;
    country: string;
    currency: string;
  }
  
  export interface ClassOfGuarantee {
    code: string;
    label: string;
    premium_after_discount_excl_taxes: number;
    total_taxes: number;
  }
  
  export interface PaymentPeriodicity {
    value: string;
    amount: number;
  }
  
  export interface BadDebtBalanceAmount {
    value: number;
    currency: string;
  }
  
  export interface Beneficiary {
    id: string;
    title: string;
    email: string;
    first_name: string;
    last_name: string;
    birth_date?: string;
    is_policy_holder: boolean;
    additional_informations: any[];
    age_segment: string;
    is_removed: boolean;
  }
  
  export interface Attachment {
    id: string;
    name: string;
    type: string;
    content_url: string;
    created_at: string;
    sent_by: string[];
    content_type: string;
  }
  
  export interface PolicyHolder {
    title: string;
    email: string;
    phone: any;
    address: {
      country: string;
    };
    first_name: string;
    last_name: string;
    birth_date: string;
    is_policy_beneficiary: boolean;
    additional_informations: any[];
    spoken_language: string;
  }
  
  export interface CustomerPreference {
    type: string;
    code: string;
    text: string;
    is_confirmed: boolean;
    is_mandatory: boolean;
    subtype: string;
    is_included_in_welcome_email: boolean;
  }
  
  export interface Historic {
    field_name: string;
    old_value?: string;
    new_value: string;
    date: string;
  }
  
  export interface CommissionPerParty {
    role: string;
    name: string;
    amount: number;
    commission_rate: number;
    is_included_in_price: boolean;
  }
  
  export interface QuotingCriteria {
    name: string;
    code: string;
    value: string;
    is_requotable: boolean;
    is_affected_by_personal_data: boolean;
  }
  
  export interface PaymentOptions {
    payment_methods: string[];
    payment_periodicities: any[];
  }
  
  export interface Product {
    code: string;
    name: string;
    description: string;
    product_reference_code: string;
    price_after_discount_inc_tax: number;
    total_discount: number;
    premium_after_discount_excl_tax: number;
    sub_category: string;
    sub_category_code: string;
    quoting_criterias: QuotingCriteria[];
    total_taxes: number;
    class_of_guarantees: ClassOfGuarantee[];
  }
  
  export interface Payment {
    type: string;
    is_managed_by_axa: boolean;
    payment_periodicity: PaymentPeriodicity;
    has_missing_payment: boolean;
    has_bad_debt: boolean;
    is_renewable: boolean;
    bad_debt_balance_amount: BadDebtBalanceAmount;
  }
  
  export interface Agency {
    address: any;
  }
  
  export interface Agent {
    phone: any;
    address: any;
    agent_reference: string;
  }
  
  export interface CoveragePeriod {
    start_date: string;
    end_date: string;
  }
  
  export interface EffectivePeriod {
    start_date: string;
    end_date: string;
  }

  export interface Status {
    value: string;
  }
  
  export interface Policy {
    status: Status;
    catalog: Catalog;
    product: Product;
    addons: any[];
    payment: Payment;
    beneficiaries: Beneficiary[];
    attachments: Attachment[];
    group: any;
    vehicles: any[];
    cancellable: boolean;
    editable: boolean;
    guarantees: any[];
    agency: Agency;
    agent: Agent;
    policy_number: string;
    policy_id: string;
    draft_policy_number: string;
    purchase_date: string;
    coverage_period: CoveragePeriod;
    effective_period: EffectivePeriod;
    contracting_actor_name: string;
    legal_withdrawal_period: string;
    duration: number;
    policy_holder: PolicyHolder;
    customer_preferences: CustomerPreference[];
    additional_informations: any[];
    quoting_criteria: QuotingCriteria[];
    quote_expire_at: string;
    payment_options: PaymentOptions;
    editable_version: string;
    historic: Historic[];
    product_group_name: string;
    product_group_code: string;
    commissions_per_party: CommissionPerParty[];
    editable_payment_type: string[];
    policy_type: string;
    is_cancellable_on_start_coverage: boolean;
  }

  export type SummaryPolicy = {
    status: string;
    policy_id: string;
    policy_number: string;
    draft_policy_number: string;
    policy_holder: {
      title: string;
      last_name: string;
      first_name: string;
      email: string;
    };
    catalog: {
      code: string;
      version: string;
    };
    purchase_date: string;
    product_name: string;
    contracting_actor_name: string;
    policy_type: string;
  };