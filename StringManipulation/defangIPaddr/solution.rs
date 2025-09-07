pub fn defang_ip_addr(address: &str) -> String {
    address.replace(".", "[.]")
}