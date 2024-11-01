Vagrant.configure("2") do |config|
  # General configuration
  config.vm.box = "generic/ubuntu2004"
  config.ssh.insert_key = false

  config.vm.provider :virtualbox do |v|
      v.memory = 512
      v.linked_clone = true
  end

  # VM configuration for mongodb database vm
  config.vm.define "mongo" do |mongo|
    mongo.vm.hostname = "mongo"
    mongo.vm.network "private_network", ip: "192.168.56.10"
    mongo.vm.network "forwarded_port", guest: 27017, host: 27017
    mongo.vm.network "forwarded_port", guest: 22, host: 2200
  end

  # VM configuration for backend app vm
  config.vm.define "backend" do |backend|
      backend.vm.hostname = "backend"
      backend.vm.network "private_network", ip: "192.168.56.11"
      backend.vm.network "forwarded_port", guest: 5000, host: 5000
      backend.vm.network "forwarded_port", guest: 22, host: 2210
      backend.vm.synced_folder "./backend", "/backend_app"
  end

  # VM configuration for frontend app vm
  config.vm.define "frontend" do |frontend|
    frontend.vm.hostname = "frontend"
    frontend.vm.network "private_network", ip: "192.168.56.12"
    frontend.vm.network "forwarded_port", guest: 3000, host: 3000
    frontend.vm.network "forwarded_port", guest: 22, host: 2220
    frontend.vm.synced_folder "./client", "/client_app"
  end

  config.vm.provision "ansible" do |ansible|
    ansible.playbook = "playbook.yml"
    ansible.verbose = true
    ##
    # ansible .groups automatically creates an ansible inventory/hosts file in the following dir:
    # ./.vagrant/provisioners/ansible/inventory/vagrant_ansible_inventory
    #
    # the file looks like:

    #   backend ansible_host=172.29.64.1 ansible_port=2201 ansible_user='vagrant' ansible_ssh_private_key_file='/mnt/c/Users/James Kimani/.vagrant.d/insecure_private_key'
    #   frontend ansible_host=172.29.64.1 ansible_port=2202 ansible_user='vagrant' ansible_ssh_private_key_file='/mnt/c/Users/James Kimani/.vagrant.d/insecure_private_key'
    #   mongo ansible_host=172.29.64.1 ansible_port=2222 ansible_user='vagrant' ansible_ssh_private_key_file='/mnt/c/Users/James Kimani/.vagrant.d/insecure_private_key'
    #   
    #   [frontend]
    #   frontend
    #   
    #   [api]
    #   backend
    #   
    #   [db]
    #   mongo
    
    ##
    ansible.groups = {
      "frontend" => ["frontend"],
      "api"  => ["backend"],
      "db"  => ["mongo"]
    }
  end

end
